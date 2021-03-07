import Block from '../modules/block'

export function renderDom(query: string, block: Block): void {
	const root = document.querySelector(query)
	root?.appendChild(block.getContent())
}
