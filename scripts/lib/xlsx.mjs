// A minimal reader for the worksheets of an .xlsx file (PRD SSDF-01): enough
// for NIST's SSDF table, with no dependency beyond fflate, which unzips it.
// It reads cell values as text (shared strings, inline strings and plain
// values), not formulas, styles or dates. Pure functions on bytes and strings,
// so npm test can run them without network access.
import { strFromU8, unzipSync } from 'fflate';

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };

/** Decodes the five XML entities and numeric character references. */
export function decodeXml(text) {
	return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, ref) => {
		if (ref[0] !== '#') return ENTITIES[ref] ?? m;
		const code = ref[1] === 'x' || ref[1] === 'X' ? Number.parseInt(ref.slice(2), 16) : Number(ref.slice(1));
		return String.fromCodePoint(code);
	});
}

/** Attributes of one start tag's text, such as `r="A1" t="s"`, as an object. */
export function attributes(text) {
	const out = {};
	for (const m of text.matchAll(/([\w:.-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) out[m[1]] = decodeXml(m[3] ?? m[4]);
	return out;
}

// The text of every <t> element inside an XML fragment, joined: a shared or
// inline string is one <t>, or several rich-text runs (<r><t>..</t></r>).
// Phonetic runs (<rPh>) are not part of the value.
function textOf(xml) {
	const plain = xml.replace(/<rPh\b[\s\S]*?<\/rPh>/g, '');
	let out = '';
	for (const m of plain.matchAll(/<t\b[^>]*?(?:\/>|>([\s\S]*?)<\/t>)/g)) out += decodeXml(m[1] ?? '');
	return out;
}

/** The shared string table (`xl/sharedStrings.xml`) as an array of strings. */
export function sharedStrings(xml) {
	return [...xml.matchAll(/<si\b[^>]*>([\s\S]*?)<\/si>|<si\b[^>]*\/>/g)].map((m) => textOf(m[1] ?? ''));
}

/** Zero-based column index of a cell reference such as "C12" (2). */
export function columnIndex(ref) {
	const letters = ref.match(/^[A-Z]+/)?.[0];
	if (!letters) throw new Error(`Bad cell reference "${ref}"`);
	let n = 0;
	for (const ch of letters) n = n * 26 + (ch.charCodeAt(0) - 64);
	return n - 1;
}

/**
 * Rows of one worksheet's XML as arrays of strings, indexed by column; empty
 * cells are "". Row numbers follow the sheet: a missing row is an empty array.
 */
export function sheetRows(xml, strings) {
	const rows = [];
	for (const row of xml.matchAll(/<row\b([^>]*?)(?:\/>|>([\s\S]*?)<\/row>)/g)) {
		const r = Number(attributes(row[1]).r ?? rows.length + 1);
		const cells = [];
		for (const c of (row[2] ?? '').matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
			const attrs = attributes(c[1]);
			const inner = c[2] ?? '';
			const v = inner.match(/<v\b[^>]*>([\s\S]*?)<\/v>/)?.[1];
			let value = '';
			if (attrs.t === 's') value = strings[Number(v)] ?? '';
			else if (attrs.t === 'inlineStr') value = textOf(inner.match(/<is\b[^>]*>([\s\S]*?)<\/is>/)?.[1] ?? '');
			else if (v !== undefined) value = decodeXml(v);
			const col = attrs.r ? columnIndex(attrs.r) : cells.length;
			while (cells.length < col) cells.push('');
			cells[col] = value;
		}
		while (rows.length < r - 1) rows.push([]);
		rows[r - 1] = cells;
	}
	return rows;
}

/**
 * Every worksheet of an .xlsx file, by sheet name: `{ SSDF: [[...], ...] }`.
 * @param {Uint8Array} bytes the file's contents
 */
export function readWorkbook(bytes) {
	const files = unzipSync(bytes);
	const text = (name) => {
		if (!files[name]) throw new Error(`Not an .xlsx file this reader understands: ${name} is missing.`);
		return strFromU8(files[name]);
	};
	const strings = files['xl/sharedStrings.xml'] ? sharedStrings(text('xl/sharedStrings.xml')) : [];
	const rels = {};
	for (const m of text('xl/_rels/workbook.xml.rels').matchAll(/<Relationship\b([^>]*?)\/?>/g)) {
		const a = attributes(m[1]);
		rels[a.Id] = a.Target.startsWith('/') ? a.Target.slice(1) : `xl/${a.Target}`;
	}
	const sheets = {};
	for (const m of text('xl/workbook.xml').matchAll(/<sheet\b([^>]*?)\/?>/g)) {
		const a = attributes(m[1]);
		const target = rels[a['r:id']];
		if (!target) throw new Error(`Sheet "${a.name}" has no worksheet part.`);
		sheets[a.name] = sheetRows(text(target), strings);
	}
	return sheets;
}
