#!/usr/bin/env node
/**
 * Accessibility check (PRD PRES-03): axe, through pa11y-ci, on the pages listed
 * in .pa11yci.json, in the light and the dark theme. Fails on any serious or
 * critical issue (pa11y reports axe's serious and critical impacts as errors).
 *
 *   npm run build && npm run check:a11y
 *
 * Serves dist/ with `astro preview` for the run, then stops it.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const PORT = 4321;
const URL = `http://localhost:${PORT}/nist-guide/`;

// Headless Chrome prefers the light scheme. For the dark run, Chrome is told the
// system prefers dark (Starlight's default follows it) and each page waits until
// Starlight has applied it, so the run fails rather than silently testing light.
const config = JSON.parse(await fs.readFile('.pa11yci.json', 'utf8'));
const dark = structuredClone(config);
dark.defaults.chromeLaunchConfig.args.push('--force-dark-mode');
dark.defaults.actions = ['wait for element html[data-theme="dark"] to be added'];
const darkFile = path.join(os.tmpdir(), 'pa11yci.dark.json');
await fs.writeFile(darkFile, JSON.stringify(dark));
const THEMES = [
	['light', '.pa11yci.json'],
	['dark', darkFile],
];

// Run the packages' own entry points with this Node, not through npx or a
// shell, so the server's pid is the server and stopping it works on Windows too.
const node = (script, args, stdio) => spawn(process.execPath, [script, ...args], { stdio });
const exited = (child) => new Promise((resolve) => child.on('exit', resolve));

const server = node('node_modules/astro/bin/astro.mjs', ['preview', '--port', String(PORT)], ['ignore', 'ignore', 'inherit']);

let failed = 0;
try {
	const deadline = Date.now() + 30_000;
	for (;;) {
		try {
			if ((await fetch(URL)).ok) break;
		} catch {}
		if (server.exitCode !== null || Date.now() > deadline) throw new Error(`Preview server did not start at ${URL}`);
		await new Promise((r) => setTimeout(r, 500));
	}
	for (const [theme, file] of THEMES) {
		console.log(`\nAccessibility, ${theme} theme:`);
		const code = await exited(node('node_modules/pa11y-ci/bin/pa11y-ci.js', ['--config', file], 'inherit'));
		if (code !== 0) failed++;
	}
} catch (err) {
	console.error(err.message);
	failed++;
} finally {
	server.kill();
}
process.exit(failed ? 1 : 0);
