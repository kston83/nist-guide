#!/usr/bin/env node
/**
 * Makes the default social preview image, public/og-default.png (PRD PRES-01).
 * Every page points og:image and twitter:image at it (head in astro.config.mjs);
 * link previews show the page's own title and the site name as text beside it.
 *
 *   npm run og-image
 *
 * Run it again after changing the wording or colours below, and commit the PNG.
 * Uses the site's typefaces from @fontsource and the theme's teal.
 */
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import zlib from 'node:zlib';
import sharp from 'sharp';

const OUT = 'public/og-default.png';
const W = 1200;
const H = 630;
const PAD = 96;

// Colours from src/styles/theme.css and public/favicon.svg.
const BG = '#093a39'; // accent-high (light theme)
const ACCENT = '#4fb3a8'; // accent (dark theme)
const SOFT = '#c6e9e4'; // accent-high (dark theme)

const TITLE = 'RMF Field Guide';
const TAGLINE = 'Applying the NIST Risk Management Framework\nand SP 800-53 to real systems';
const URL = 'kston83.github.io/nist-guide';

const fonts = 'node_modules/@fontsource';
const SERIF = await woffToTtf(`${fonts}/source-serif-4/files/source-serif-4-latin-600-normal.woff`);
const SANS = await woffToTtf(`${fonts}/public-sans/files/public-sans-latin-400-normal.woff`);
const SANS_BOLD = await woffToTtf(`${fonts}/public-sans/files/public-sans-latin-600-normal.woff`);

// sharp's text renderer loads TrueType/OpenType files, not WOFF, and @fontsource
// ships WOFF. WOFF 1 is the same tables, each zlib-compressed: unpack to a temp .ttf.
async function woffToTtf(file) {
	const woff = await fs.readFile(file);
	if (woff.toString('latin1', 0, 4) !== 'wOFF') throw new Error(`${file} is not a WOFF 1 file`);
	const numTables = woff.readUInt16BE(12);
	const tables = [];
	for (let i = 0; i < numTables; i++) {
		const e = 44 + i * 20;
		const [offset, compLength, origLength] = [woff.readUInt32BE(e + 4), woff.readUInt32BE(e + 8), woff.readUInt32BE(e + 12)];
		const raw = woff.subarray(offset, offset + compLength);
		tables.push({
			tag: woff.subarray(e, e + 4),
			checksum: woff.readUInt32BE(e + 16),
			data: compLength < origLength ? zlib.inflateSync(raw) : raw,
		});
	}
	const pow = 2 ** Math.floor(Math.log2(numTables));
	const head = Buffer.alloc(12 + numTables * 16);
	head.writeUInt32BE(woff.readUInt32BE(4), 0); // sfnt flavor
	head.writeUInt16BE(numTables, 4);
	head.writeUInt16BE(pow * 16, 6);
	head.writeUInt16BE(Math.log2(pow), 8);
	head.writeUInt16BE(numTables * 16 - pow * 16, 10);
	const body = [];
	let offset = head.length;
	tables.forEach((t, i) => {
		const r = 12 + i * 16;
		t.tag.copy(head, r);
		head.writeUInt32BE(t.checksum, r + 4);
		head.writeUInt32BE(offset, r + 8);
		head.writeUInt32BE(t.data.length, r + 12);
		const padded = Buffer.alloc((t.data.length + 3) & ~3);
		t.data.copy(padded);
		body.push(padded);
		offset += padded.length;
	});
	const out = path.join(os.tmpdir(), path.basename(file).replace(/\.woff$/, '.ttf'));
	await fs.writeFile(out, Buffer.concat([head, ...body]));
	return out;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// One block of text in one typeface, as a transparent PNG.
async function text(value, { fontfile, font, color, spacing = 0 }) {
	const markup = `<span foreground="${color}">${esc(value)}</span>`;
	return sharp({ text: { text: markup, font, fontfile, rgba: true, spacing, width: W - 2 * PAD } })
		.png()
		.toBuffer();
}

// Background: teal field, accent bar on the left, and the favicon mark (three lines).
const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
	<rect width="${W}" height="${H}" fill="${BG}"/>
	<rect x="0" y="0" width="16" height="${H}" fill="${ACCENT}"/>
	<g transform="translate(${PAD} ${PAD}) scale(2.5)" fill="${ACCENT}">
		<rect x="0" y="0" width="18" height="3" rx="1.5"/>
		<rect x="0" y="7.5" width="12" height="3" rx="1.5"/>
		<rect x="0" y="15" width="15" height="3" rx="1.5"/>
	</g>
</svg>`);

const title = await text(TITLE, { fontfile: SERIF, font: 'Source Serif 4 Semi-Bold 88', color: '#ffffff' });
const tagline = await text(TAGLINE, { fontfile: SANS, font: 'Public Sans 38', color: SOFT, spacing: 14 });
const url = await text(URL, { fontfile: SANS_BOLD, font: 'Public Sans Semi-Bold 28', color: ACCENT });

const urlHeight = (await sharp(url).metadata()).height;
await sharp(background)
	.composite([
		{ input: title, left: PAD, top: 210 },
		{ input: tagline, left: PAD, top: 340 },
		{ input: url, left: PAD, top: H - PAD - urlHeight },
	])
	.png({ compressionLevel: 9 })
	.toFile(OUT);

console.log(`Wrote ${OUT} (${W}x${H}).`);
