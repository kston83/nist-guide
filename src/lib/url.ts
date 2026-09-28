// Prefix a root-relative path ("/rmf/") with the configured site base
// ("/nist-guide"), for links in components and MDX props, which the
// rehypeRebaseLinks plugin in astro.config.mjs cannot reach.
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}${path}`;
}
