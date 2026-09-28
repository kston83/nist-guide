// Annotated and clean editions, and federal sections (PRD TPL-04).
//
//   :::guidance ... :::   teaching text. Kept in the annotated edition (the one
//                         the site shows) and removed from the clean edition.
//   :::federal ... :::    requirements for federal systems only. Kept in both
//                         editions under a "Federal systems" heading, one level
//                         below the section it sits in, so a non-federal
//                         reader can delete the marked section whole.
//
// Blocks open with the fence line alone and close with ":::" alone; they don't
// nest. Pure, so npm test can run it; runs before variable rendering.

import type { Target } from './template-vars';

export type Edition = 'annotated' | 'clean';

export const FEDERAL_HEADING = 'Federal systems';

export class BlockError extends Error {}

const OPEN = /^:::\s*([a-z]+)\s*$/;
const CLOSE = /^:::\s*$/;
const HEADING = /^(#{1,6})\s/;

function guidance(lines: string[], target: Target): string[] {
	const body = lines.join('\n').trim();
	if (target === 'site') return [':::note[Guidance]', body, ':::'];
	if (target === 'docx') return ['::: {custom-style="Guidance"}', body, ':::'];
	// .md: a blockquote, labelled on its first line.
	return `**Guidance:** ${body}`.split('\n').map((l) => (l ? `> ${l}` : '>'));
}

function federal(lines: string[], level: number, target: Target): string[] {
	const heading = `${'#'.repeat(level)} ${FEDERAL_HEADING}`;
	const body = lines.join('\n').trim();
	if (target === 'site') return ['<div class="tpl-federal">', '', heading, '', body, '', '</div>'];
	return [heading, '', body];
}

export function renderBlocks(source: string, edition: Edition, target: Target): string {
	const out: string[] = [];
	const lines = source.replace(/\r\n/g, '\n').split('\n');
	let level = 1; // level of the last heading seen outside a block
	for (let i = 0; i < lines.length; i++) {
		const open = lines[i].match(OPEN);
		if (!open) {
			if (CLOSE.test(lines[i])) throw new BlockError(`line ${i + 1}: ":::" closes no block`);
			const h = lines[i].match(HEADING);
			if (h) level = h[1].length;
			out.push(lines[i]);
			continue;
		}
		const kind = open[1];
		if (kind !== 'guidance' && kind !== 'federal')
			throw new BlockError(`line ${i + 1}: unknown block ":::${kind}" (use :::guidance or :::federal)`);
		const start = i;
		const inner: string[] = [];
		for (i++; i < lines.length && !CLOSE.test(lines[i]); i++) {
			if (OPEN.test(lines[i])) throw new BlockError(`line ${i + 1}: blocks can't nest (inside :::${kind} from line ${start + 1})`);
			inner.push(lines[i]);
		}
		if (i >= lines.length) throw new BlockError(`line ${start + 1}: :::${kind} is never closed`);
		if (kind === 'guidance') {
			if (edition === 'annotated') out.push(...guidance(inner, target));
		} else out.push(...federal(inner, Math.min(Math.max(level + 1, 2), 6), target));
	}
	// Removing a block can leave runs of blank lines.
	return out.join('\n').replace(/\n{3,}/g, '\n\n');
}
