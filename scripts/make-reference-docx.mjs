#!/usr/bin/env node
/**
 * Makes templates/reference.docx, the Word styles pandoc applies to every .docx
 * in the kit (PRD TPL-05, PRES-06). Starts from pandoc's own default reference
 * document and changes the look (owner's choices, 2026-09-28):
 *   fonts     Calibri body and Georgia headings: close to the site's Public Sans
 *             and Source Serif 4, and installed with Office, so every reader sees
 *             the same document
 *   color     the site's deep teal (#0F5C5A) on headings, links and table header rows
 *   tables    light grid, teal header row with white bold text
 *   header    document title and "Version x.y.z" ({{title}} and {{version}}, which
 *             toDocx in scripts/lib/template-kit.mjs fills per document)
 *   footer    "Page X of Y"
 *   page      US Letter, 1 inch margins
 * and adds the two styles the templates use:
 *   Fill-in   character style for fill-in fields: highlighted
 *   Guidance  paragraph style for annotated guidance: shaded, with a left rule
 * No guide name or logo: organizations adopt these documents as their own.
 *
 *   npm run reference-docx        (needs pandoc; set PANDOC to its path if it isn't on PATH)
 *
 * The result is committed; rerun only to change the styles.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { strFromU8, strToU8, unzipSync } from 'fflate';
import { zipDeterministic } from './lib/template-kit.mjs';

const PANDOC = process.env.PANDOC || 'pandoc';
const OUT = 'templates/reference.docx';

const TEAL = '0F5C5A';
const TEAL_DARK = '093A39';
const GREY = '595959';
const BODY_FONT = 'Calibri';
const HEADING_FONT = 'Georgia';

const fonts = (name) => `<w:rFonts w:ascii="${name}" w:hAnsi="${name}" w:cs="${name}" w:eastAsiaTheme="minorEastAsia"/>`;
const size = (halfPoints) => `<w:sz w:val="${halfPoints}"/><w:szCs w:val="${halfPoints}"/>`;
const border = (side) => `<w:${side} w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/>`;

const DOC_DEFAULTS = `<w:docDefaults><w:rPrDefault><w:rPr>${fonts(BODY_FONT)}${size(22)}<w:lang w:val="en-US" w:eastAsia="zh-CN" w:bidi="ar-SA"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>`;

const heading = (id, name, level, { font, halfPoints, color, before, after, bold = false }) =>
	`<w:style w:type="paragraph" w:styleId="${id}"><w:name w:val="${name}"/><w:basedOn w:val="Normal"/><w:next w:val="BodyText"/><w:link w:val="${id}Char"/><w:uiPriority w:val="9"/><w:qFormat/><w:pPr><w:keepNext/><w:keepLines/><w:spacing w:before="${before}" w:after="${after}"/><w:outlineLvl w:val="${level}"/></w:pPr><w:rPr>${fonts(font)}${bold ? '<w:b/><w:bCs/>' : ''}<w:color w:val="${color}"/>${size(halfPoints)}</w:rPr></w:style>`;

// Whole-style replacements, keyed by style id.
const REPLACE = {
	BodyText: `<w:style w:type="paragraph" w:styleId="BodyText"><w:name w:val="Body Text"/><w:basedOn w:val="Normal"/><w:link w:val="BodyTextChar"/><w:qFormat/><w:pPr><w:spacing w:before="0" w:after="160"/></w:pPr></w:style>`,
	Title: `<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:next w:val="BodyText"/><w:link w:val="TitleChar"/><w:uiPriority w:val="10"/><w:qFormat/><w:pPr><w:spacing w:after="240"/><w:contextualSpacing/></w:pPr><w:rPr>${fonts(HEADING_FONT)}<w:color w:val="${TEAL}"/>${size(52)}</w:rPr></w:style>`,
	Heading1: heading('Heading1', 'heading 1', 0, { font: HEADING_FONT, halfPoints: 36, color: TEAL, before: 360, after: 120 }),
	Heading2: heading('Heading2', 'heading 2', 1, { font: HEADING_FONT, halfPoints: 28, color: TEAL, before: 300, after: 100 }),
	Heading3: heading('Heading3', 'heading 3', 2, { font: HEADING_FONT, halfPoints: 24, color: TEAL_DARK, before: 240, after: 80, bold: true }),
	Heading4: heading('Heading4', 'heading 4', 3, { font: BODY_FONT, halfPoints: 22, color: TEAL_DARK, before: 200, after: 60, bold: true }),
	Hyperlink: `<w:style w:type="character" w:styleId="Hyperlink"><w:name w:val="Hyperlink"/><w:basedOn w:val="BodyTextChar"/><w:rPr><w:color w:val="${TEAL}"/><w:u w:val="single"/></w:rPr></w:style>`,
	Table: `<w:style w:type="table" w:default="1" w:styleId="Table"><w:name w:val="Table"/><w:basedOn w:val="TableNormal"/><w:uiPriority w:val="59"/><w:qFormat/><w:pPr><w:spacing w:before="0" w:after="0"/></w:pPr><w:rPr>${size(20)}</w:rPr><w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(border).join('')}</w:tblBorders><w:tblCellMar><w:top w:w="60" w:type="dxa"/><w:left w:w="108" w:type="dxa"/><w:bottom w:w="60" w:type="dxa"/><w:right w:w="108" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblStylePr w:type="firstRow"><w:rPr><w:b/><w:bCs/><w:color w:val="FFFFFF"/></w:rPr><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="${TEAL}"/><w:vAlign w:val="bottom"/></w:tcPr></w:tblStylePr></w:style>`,
};

// Styles pandoc's default lacks.
const ADD = [
	`<w:style w:type="character" w:customStyle="1" w:styleId="Fill-in"><w:name w:val="Fill-in"/><w:rPr><w:highlight w:val="yellow"/></w:rPr></w:style>`,
	`<w:style w:type="paragraph" w:customStyle="1" w:styleId="Guidance"><w:name w:val="Guidance"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:pBdr><w:left w:val="single" w:sz="18" w:space="8" w:color="${TEAL}"/></w:pBdr><w:shd w:val="clear" w:color="auto" w:fill="EAF4F3"/><w:ind w:left="284"/></w:pPr><w:rPr><w:i/></w:rPr></w:style>`,
	`<w:style w:type="paragraph" w:styleId="Header"><w:name w:val="header"/><w:basedOn w:val="Normal"/><w:uiPriority w:val="99"/><w:unhideWhenUsed/><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="4" w:space="4" w:color="${TEAL}"/></w:pBdr><w:tabs><w:tab w:val="right" w:pos="9360"/></w:tabs><w:spacing w:after="0"/></w:pPr><w:rPr><w:color w:val="${GREY}"/>${size(18)}</w:rPr></w:style>`,
	`<w:style w:type="paragraph" w:styleId="Footer"><w:name w:val="footer"/><w:basedOn w:val="Normal"/><w:uiPriority w:val="99"/><w:unhideWhenUsed/><w:pPr><w:jc w:val="center"/><w:spacing w:after="0"/></w:pPr><w:rPr><w:color w:val="${GREY}"/>${size(18)}</w:rPr></w:style>`,
];

const NS = `xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"`;
const run = (text) => `<w:r><w:t xml:space="preserve">${text}</w:t></w:r>`;
const field = (instr, shown) => `<w:fldSimple w:instr=" ${instr} ">${run(shown)}</w:fldSimple>`;
const HEADER = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:hdr ${NS}><w:p><w:pPr><w:pStyle w:val="Header"/></w:pPr>${run('{{title}}')}<w:r><w:tab/></w:r>${run('Version {{version}}')}</w:p></w:hdr>`;
const FOOTER = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<w:ftr ${NS}><w:p><w:pPr><w:pStyle w:val="Footer"/></w:pPr>${run('Page ')}${field('PAGE', '1')}${run(' of ')}${field('NUMPAGES', '1')}</w:p></w:ftr>`;
const SECT_PR = `<w:sectPr><w:headerReference w:type="default" r:id="rIdPres06Header"/><w:footerReference w:type="default" r:id="rIdPres06Footer"/><w:footnotePr><w:numRestart w:val="eachSect"/></w:footnotePr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr>`;

function replaceOnce(text, pattern, replacement, what) {
	if (!pattern.test(text)) throw new Error(`pandoc default reference.docx: ${what} not found`);
	return text.replace(pattern, replacement);
}

const original = execFileSync(PANDOC, ['--print-default-data-file', 'reference.docx'], { maxBuffer: 16 * 1024 * 1024 });
const files = unzipSync(new Uint8Array(original));

let styles = strFromU8(files['word/styles.xml']);
styles = replaceOnce(styles, /<w:docDefaults>[\s\S]*?<\/w:docDefaults>/, DOC_DEFAULTS, 'docDefaults');
for (const [id, xml] of Object.entries(REPLACE))
	styles = replaceOnce(styles, new RegExp(`<w:style [^>]*w:styleId="${id}"[^>]*>[\\s\\S]*?</w:style>`), xml, `style ${id}`);
for (const xml of ADD) {
	const id = xml.match(/w:styleId="([^"]+)"/)[1];
	if (styles.includes(`w:styleId="${id}"`)) throw new Error(`pandoc default already defines ${id}`);
}
files['word/styles.xml'] = strToU8(styles.replace('</w:styles>', `${ADD.join('')}</w:styles>`));

files['word/header1.xml'] = strToU8(HEADER);
files['word/footer1.xml'] = strToU8(FOOTER);
const rels = strFromU8(files['word/_rels/document.xml.rels']);
files['word/_rels/document.xml.rels'] = strToU8(
	rels.replace(
		'</Relationships>',
		'<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Id="rIdPres06Header" Target="header1.xml" /><Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Id="rIdPres06Footer" Target="footer1.xml" /></Relationships>',
	),
);
const types = strFromU8(files['[Content_Types].xml']);
files['[Content_Types].xml'] = strToU8(
	types.replace(
		'</Types>',
		'<Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml" /><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml" /></Types>',
	),
);
let document = strFromU8(files['word/document.xml']);
document = replaceOnce(document, /<w:sectPr>[\s\S]*?<\/w:sectPr>/, SECT_PR, 'sectPr');
if (!document.includes('xmlns:r=')) document = document.replace('<w:document ', '<w:document xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ');
files['word/document.xml'] = strToU8(document);

fs.writeFileSync(OUT, zipDeterministic(files));
console.log(`Wrote ${OUT}.`);
