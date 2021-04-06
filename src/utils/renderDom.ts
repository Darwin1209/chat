import Block from '../modules/block'

export function renderDom(query: string | undefined, block: Block): void {
	const root = document.querySelector(query || 'root')
	root?.appendChild(block.getContent())
}
