// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'node:url';
import { visit } from 'unist-util-visit';
import { rehypeEnhancementTokens } from './src/lib/search-tokens.mjs';
import { rehypeTaskListLabels } from './src/lib/task-list-labels.mjs';

// ---------------------------------------------------------------------------
// Edit these three values, then push. Everything else can stay as it is.
// GITHUB_USER: your GitHub username.
// REPO_NAME: the repository name. If it's named <username>.github.io, the
//   site is served from the root and BASE_PATH should be '/'.
// SITE_URL: switch to your custom domain later (for example https://rmfguide.com)
//   and add the domain to public/CNAME. If you do, also set BASE_PATH back to '/'.
// ---------------------------------------------------------------------------
const GITHUB_USER = 'kston83';
const REPO_NAME = 'nist-guide';
const SITE_URL = `https://${GITHUB_USER}.github.io`;
const BASE_PATH = `/${REPO_NAME}`;
const REPO_URL = `https://github.com/${GITHUB_USER}/${REPO_NAME}`;
const OG_IMAGE = `${SITE_URL}${BASE_PATH.replace(/\/$/, '')}/og-default.png`; // absolute, as link previews need

// Content pages write internal links/images as root-relative paths (e.g.
// "/rmf/roles/"), which Astro does not rebase automatically the way it does
// for Starlight's own sidebar and pagination links. This rehype plugin
// prepends BASE_PATH to any href/src that starts with "/" but not already
// with the base, so content links keep working under a repo subpath.
function rehypeRebaseLinks() {
	return (tree) => {
		if (BASE_PATH === '/') return;
		visit(tree, 'element', (node) => {
			for (const attr of ['href', 'src']) {
				const value = node.properties?.[attr];
				if (
					typeof value === 'string' &&
					value.startsWith('/') &&
					!value.startsWith('//') &&
					!value.startsWith(`${BASE_PATH}/`) &&
					value !== BASE_PATH
				) {
					node.properties[attr] = `${BASE_PATH}${value}`;
				}
			}
		});
	};
}

// The 20 SP 800-53 Rev. 5 families, in catalog order.
const families = [
	['ac', 'Access Control'], ['at', 'Awareness and Training'], ['au', 'Audit and Accountability'],
	['ca', 'Assessment, Authorization, and Monitoring'], ['cm', 'Configuration Management'],
	['cp', 'Contingency Planning'], ['ia', 'Identification and Authentication'], ['ir', 'Incident Response'],
	['ma', 'Maintenance'], ['mp', 'Media Protection'], ['pe', 'Physical and Environmental Protection'],
	['pl', 'Planning'], ['pm', 'Program Management'], ['ps', 'Personnel Security'],
	['pt', 'PII Processing and Transparency'], ['ra', 'Risk Assessment'], ['sa', 'System and Services Acquisition'],
	['sc', 'System and Communications Protection'], ['si', 'System and Information Integrity'],
	['sr', 'Supply Chain Risk Management'],
];

export default defineConfig({
	site: SITE_URL,
	base: BASE_PATH,
	markdown: {
		rehypePlugins: [rehypeRebaseLinks, rehypeEnhancementTokens, rehypeTaskListLabels],
	},
	// Search for enhancement ids such as "AC-2(3)" (PRD NAV-01): wrap the Pagefind UI
	// that Starlight loads so it can rewrite them. See src/lib/search-tokens.mjs.
	vite: {
		resolve: {
			alias: [
				{
					find: /^@pagefind\/default-ui$/,
					replacement: fileURLToPath(new URL('./src/lib/pagefind-ui.mjs', import.meta.url)),
				},
			],
		},
	},
	integrations: [
		starlight({
			title: 'RMF Field Guide',
			description:
				'A practical guide to applying the NIST Risk Management Framework and SP 800-53 controls to real systems.',
			favicon: '/favicon.svg',
			// Social preview image for every page (PRD PRES-01). Starlight already sets
			// og:title, og:description, og:site_name and twitter:card. Remake the image
			// with `npm run og-image`.
			head: [
				['og:image', OG_IMAGE],
				['og:image:width', '1200'],
				['og:image:height', '630'],
				['og:image:alt', 'RMF Field Guide: applying the NIST Risk Management Framework and SP 800-53 to real systems'],
			]
				.map(([property, content]) => ({ tag: 'meta', attrs: { property, content } }))
				.concat({ tag: 'meta', attrs: { name: 'twitter:image', content: OG_IMAGE } }),
			social: [
				{ icon: 'linkedin', label: 'Kristopher Stone on LinkedIn', href: 'https://www.linkedin.com/in/kristopher-stone-cissp-655b4866' },
				{ icon: 'github', label: 'Source on GitHub', href: REPO_URL },
			],
			editLink: { baseUrl: `${REPO_URL}/edit/main/` },
			lastUpdated: true,
			customCss: [
				'@fontsource/public-sans/400.css',
				'@fontsource/public-sans/600.css',
				'@fontsource/source-serif-4/600.css',
				'./src/styles/theme.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
			},
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'About this guide', slug: 'about' },
						{ label: 'How to use it', slug: 'rmf' },
					],
				},
				{ label: 'Build your program', items: [{ autogenerate: { directory: 'program' } }] },
				{
					label: 'Risk Management Framework',
					items: [
						{ label: 'Roles and responsibilities', slug: 'rmf/roles' },
						{ label: 'The seven steps', items: [{ autogenerate: { directory: 'rmf/steps' } }] },
						{ label: 'ATO package checklist', slug: 'rmf/ato-package' },
						{ label: 'Program variants', slug: 'rmf/program-variants' },
					],
				},
				{
					label: 'SP 800-53 controls',
					items: [
						{ label: 'Using the control pages', slug: 'controls' },
						{ label: 'Guidance coverage', slug: 'controls/coverage' },
						{ label: 'Baselines', collapsed: true, items: [{ autogenerate: { directory: 'controls/baselines' } }] },
						...families.map(([id, name]) => ({
							label: `${name} (${id.toUpperCase()})`,
							collapsed: true,
							items: [{ autogenerate: { directory: `controls/${id}` } }],
						})),
					],
				},
				{
					label: 'Templates',
					items: [
						{ label: 'All templates', slug: 'templates' },
						{ label: 'Starter kit', slug: 'templates/starter-kit' },
						{ label: 'Policies', collapsed: true, items: [{ autogenerate: { directory: 'templates/policies' } }] },
						{
							label: 'Decision worksheets',
							collapsed: true,
							items: [{ autogenerate: { directory: 'templates/worksheets' } }],
						},
						{ label: 'Plans', collapsed: true, items: [{ autogenerate: { directory: 'templates/plans' } }] },
						{ label: 'Standards', collapsed: true, items: [{ autogenerate: { directory: 'templates/standards' } }] },
						{
							label: 'Forms and registers',
							collapsed: true,
							items: [{ autogenerate: { directory: 'templates/forms' } }],
						},
					],
				},
				{ label: 'Industry guides', items: [{ autogenerate: { directory: 'industries' } }] },
				{ label: 'Technology playbooks', items: [{ autogenerate: { directory: 'technology' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
			],
		}),
	],
});
