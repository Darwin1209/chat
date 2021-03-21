import Block from '../../modules/block.js'

import Aside from '../../components/aside/index.js'
import Chat from '../../components/chat/index.js'

import { renderChildren } from '../../utils/renderChildren.js'
import { listText } from './mock.js'

export default class Main extends Block {
	constructor() {
		super('div', {
			className: 'container flex',
			components: [
				new Aside({
					items: listText,
				}),
				new Chat({}),
			],
		})
	}

	render() {
		return ''
	}

	componentDidRender(): void {
		renderChildren(this.element, this.props.components)
	}
}
