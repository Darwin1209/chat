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
								validText: 'Невалидный email',
								label: 'Почта',
							},
							{
								type: 'text',
								name: 'login',
								validation: 'login',
								validText: 'Невалидный логин',
								label: 'Логин',
							},
							{
								type: 'text',
								name: 'first_name',
								validation: 'text',
								validText: 'Имя содержет недопустимые символы',
								label: 'Имя',
							},
							{
								type: 'text',
								name: 'second_name',
								validation: 'text',
								validText: 'Фамилия содержет недопустимые символы',
								label: 'Фамилия',
							},
							{
								type: 'tel',
								name: 'phone',
								validation: 'phone',
								validText: 'Телефон набран неправильно',
								label: 'Телефон',
							},
							{
								type: 'password',
								name: 'password',
								validation: 'pass',
								validText: 'Слабый пароль',
								label: 'Пароль',
								pass: true,
							},
							{
								type: 'password',
								name: 'password_two',
								validation: 'passTwo',
								validText: 'Пароли несовпадают',
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