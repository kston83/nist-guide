// Markdown task lists ("- [ ] Roles named") render as <input type="checkbox">
// with no label, which axe reports as critical (PRD PRES-03). This rehype plugin
// wraps each checkbox and the text after it in a <label>, so assistive technology
// reads the item text as the checkbox's name. Nothing changes visually.
import { visit } from 'unist-util-visit';

// Content a <label> can hold; stop at the first block (nested list, paragraph).
const BLOCK = new Set(['p', 'ul', 'ol', 'div', 'blockquote', 'pre', 'table', 'details', 'figure']);
const isCheckbox = (n) => n.type === 'element' && n.tagName === 'input' && n.properties?.type === 'checkbox';

export function rehypeTaskListLabels() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			// The checkbox is a direct child of the <li> (tight list) or of its first <p> (loose list).
			if (node.tagName !== 'li' && node.tagName !== 'p') return;
			const at = node.children.findIndex(isCheckbox);
			if (at === -1) return;
			let end = at + 1;
			while (end < node.children.length && !BLOCK.has(node.children[end].tagName)) end++;
			const label = { type: 'element', tagName: 'label', properties: {}, children: node.children.slice(at, end) };
			node.children.splice(at, end - at, label);
		});
	};
}
