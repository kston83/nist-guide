// Downloadable kit helpers (PRD TPL-05): the header block every document
// carries, .docx conversion with pandoc, and deterministic .zip packs.
import { spawn } from 'node:child_process';
import { zipSync } from 'fflate';

// Written into downloads/ when .docx files were skipped, so the link check
// knows to expect missing .docx links in that build (never in CI).
export const NO_DOCX = '.no-docx';

export function kitReadme({ version, basis, url }) {
	return [
		'RMF Field Guide program templates',
		'',
		`Template version ${version}, based on NIST ${basis.replace(/^SP 800-53 release/, 'SP 800-53 Rev. 5, release')}.`,
		`Latest version and previews: ${url}`,
		'',
		'Each document comes in two editions: ready to adopt, and annotated (with guidance on',
		'why each section exists and what assessors look for). Policies come in one variant per',
		'baseline. Fill every highlighted field; the decision worksheets (.csv) list every value',
		'to decide. Delete any "Federal systems" section that does not apply to you.',
		'',
		'Tailor these templates before adoption; they are not legal advice.',
		'',
		'Dedicated to the public domain under CC0 1.0 Universal:',
		'https://creativecommons.org/publicdomain/zero/1.0/',
		'Adopt, modify and redistribute them without attribution.',
		'',
	].join('\r\n');
}

// Fixed timestamp inside zips, so the same files always give the same bytes.
const ZIP_TIME = new Date('2026-01-01T00:00:00Z');

export function zipDeterministic(files) {
	const entries = {};
	for (const name of Object.keys(files).sort()) entries[name] = [files[name], { mtime: ZIP_TIME }];
	return zipSync(entries, { level: 9 });
}

const EDITION_LABEL = { clean: 'Ready to adopt', annotated: 'Annotated (with guidance)' };

/**
 * The header block after a document's title: version, baseline, edition, NIST
 * basis, where to find the latest version, and the notices.
 */
export function documentHeader({ version, baseline, edition, basis, url }) {
	const facts = [
		`**Template version:** ${version}`,
		baseline ? `**Baseline:** ${baseline}` : '',
		`**Edition:** ${EDITION_LABEL[edition]}`,
		`**NIST basis:** ${basis.replace(/^SP 800-53 release/, 'SP 800-53 Rev. 5, release')}`,
	]
		.filter(Boolean)
		.join(' · ');
	return [
		facts,
		`*Tailor this template before adoption; it is not legal advice.* Latest version: <${url}>. Dedicated to the public domain under CC0 1.0 (<https://creativecommons.org/publicdomain/zero/1.0/>): adopt and change it without attribution.`,
	].join('\n\n');
}

// Puts the header after the first "# " title, or at the top when there is none.
export function withHeader(text, header) {
	const m = text.match(/^# .*\n/m);
	if (!m) return `${header}\n\n${text}`;
	const at = m.index + m[0].length;
	return `${text.slice(0, at)}\n${header}\n${text.slice(at)}`;
}

// Pandoc Markdown without extensions that would misread policy text: "$" as
// math, "@" as citations, raw TeX.
const PANDOC_FROM = 'markdown-tex_math_dollars-raw_tex-citations';

/** Converts pandoc Markdown to .docx bytes using the reference document's styles. */
export function toDocx(markdown, { pandoc, referenceDoc, sourceDateEpoch }) {
	return new Promise((resolve, reject) => {
		const child = spawn(pandoc, ['-f', PANDOC_FROM, '-t', 'docx', '--reference-doc', referenceDoc, '-o', '-'], {
			env: { ...process.env, SOURCE_DATE_EPOCH: String(sourceDateEpoch) },
		});
		const out = [];
		const err = [];
		child.stdout.on('data', (d) => out.push(d));
		child.stderr.on('data', (d) => err.push(d));
		child.on('error', reject);
		child.on('close', (code) =>
			code === 0 ? resolve(Buffer.concat(out)) : reject(new Error(`pandoc exited ${code}: ${Buffer.concat(err).toString()}`)),
		);
		child.stdin.end(markdown);
	});
}

/** The pandoc to use, or null: PANDOC if set, else "pandoc" when it runs. */
export async function findPandoc() {
	const candidate = process.env.PANDOC || 'pandoc';
	return new Promise((resolve) => {
		const child = spawn(candidate, ['--version']);
		child.on('error', () => resolve(null));
		child.on('close', (code) => resolve(code === 0 ? candidate : null));
	});
}
