#!/usr/bin/env node
/**
 * Makes templates/reference.docx, the Word styles pandoc applies to every .docx
 * in the kit (PRD TPL-05). Starts from pandoc's own default reference document
 * and adds the two styles the templates use:
 *   Fill-in   character style for fill-in fields: highlighted
 *   Guidance  paragraph style for annotated guidance: shaded, with a left rule
 *
 *   npm run reference-docx        (needs pandoc; set PANDOC to its path if it isn't on PATH)
 *
 * The result is committed; rerun only to change the styles. PRES-06 will refine the look.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { strFromU8, strToU8, unzipSync } from 'fflate';
import { zipDeterministic } from './lib/template-kit.mjs';

const PANDOC = process.env.PANDOC || 'pandoc';
const OUT = 'templates/reference.docx';

const STYLES = `<w:style w:type="character" w:customStyle="1" w:styleId="Fill-in"><w:name w:val="Fill-in"/><w:rPr><w:highlight w:val="yellow"/></w:rPr></w:style><w:style w:type="paragraph" w:customStyle="1" w:styleId="Guidance"><w:name w:val="Guidance"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:pBdr><w:left w:val="single" w:sz="18" w:space="8" w:color="0F5C5A"/></w:pBdr><w:shd w:val="clear" w:color="auto" w:fill="EAF4F3"/><w:ind w:left="284"/></w:pPr><w:rPr><w:i/></w:rPr></w:style>`;

const original = execFileSync(PANDOC, ['--print-default-data-file', 'reference.docx'], { maxBuffer: 16 * 1024 * 1024 });
const files = unzipSync(new Uint8Array(original));
const styles = strFromU8(files['word/styles.xml']);
if (styles.includes('w:styleId="Fill-in"')) throw new Error('pandoc default already defines Fill-in');
files['word/styles.xml'] = strToU8(styles.replace('</w:styles>', `${STYLES}</w:styles>`));
fs.writeFileSync(OUT, zipDeterministic(files));
console.log(`Wrote ${OUT}.`);
