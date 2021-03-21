import Block from '../../modules/block.js'

import Error from '../../components/error/index.js'

import { renderChildren } from '../../utils/renderChildren.js'

export default class E500 extends Block {
	constructor() {
		super('main', {
			className: 'main',
			components: [
				new Error({
					context: {
						code: '500',
						message: 'Мы уже фиксим',
						link: '/',
						linkText: 'Назад к чатам',
					},
				}),
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
