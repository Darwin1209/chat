import Block from '../../modules/block.js'

import Error from '../../components/error/index.js'

import { renderChildren } from '../../utils/renderChildren.js'
import { replaceLink } from '../../utils/replaceLink.js'

export default class E404 extends Block {
	constructor() {
		super('main', {
			className: 'main',
			components: [
				new Error({
					context: {
						code: '404',
						message: 'Не туда попали',
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
