import Block from '../../modules/block.js'

import Form from '../../components/form/index.js'

import { renderChildren } from '../../utils/renderChildren.js'

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
						link: 'registration.html',
						linkLabel: 'Нет аккаунта?',
						fields: [
							{ type: 'text', name: 'login', label: 'Логин' },
							{
								type: 'password',
								name: 'password',
								label: 'Пароль',
								pass: true,
							},
						],
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
