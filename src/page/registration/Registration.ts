import Block from '../../modules/block.js'

import Form from '../../components/form/index.js'

import { renderChildren } from '../../utils/renderChildren.js'

export default class Registration extends Block {
	constructor() {
		super('main', {
			className: 'main',
			components: [
				new Form({
					className: 'form form-reg form-reg_registr',
					context: {
						title: 'Регистрация',
						submit: 'Зарегистрироваться',
						link: 'auth.html',
						linkLabel: 'Войти',
						fields: [
							{
								type: 'text',
								name: 'email',
								validation: 'mail',
								label: 'Почта',
							},
							{
								type: 'text',
								name: 'login',
								validation: 'login',
								label: 'Логин',
							},
							{
								type: 'text',
								name: 'first_name',
								validation: 'text',
								label: 'Имя',
							},
							{
								type: 'text',
								name: 'second_name',
								validation: 'text',
								label: 'Фамилия',
							},
							{
								type: 'number',
								name: 'phone',
								validation: 'phone',
								label: 'Телефон',
							},
							{
								type: 'password',
								name: 'password',
								validation: 'pass',
								label: 'Пароль',
								pass: true,
							},
							{
								type: 'password',
								name: 'password_two',
								validation: 'pass_two',
								label: 'Пароль (ещё раз)',
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

// result = res2.map(el => ({
//   type: 'text',
//   name: el.children[0].name,
//   label: el.children[1].textContent
// }))
