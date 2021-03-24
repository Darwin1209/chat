import Router from '../../routers/Router.js'

import Block from '../../modules/block.js'
import Form from '../../components/form/index.js'

import { renderChildren } from '../../utils/renderChildren.js'
import { replaceLink } from '../../utils/replaceLink.js'

import { fields } from './mock.js'

const router = new Router('#root')

export default class Auth extends Block {
	constructor() {
		super('main', {
			className: 'main',
			components: [
				new Form({
					className: 'form form-reg form-reg_auth',
					context: {
						title: 'Авторизация',
						submit: 'Авторизоваться',
						link: '/registration',
						linkLabel: 'Нет аккаунта?',
						fields,
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
		replaceLink(this.element)
	}
}
