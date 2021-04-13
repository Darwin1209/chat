import Store from '../../store/Store'
import Router from '../../routers/Router'

import Block from '../../modules/block'

import Form from '../../components/form/index'

import { renderChildren } from '../../utils/renderChildren'
import { fields } from './mock'

import AuthController from '../../controlers/authControler'

const router = new Router('#root')
const store = Store.getInstance()

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
						link: '/auth',
						linkLabel: 'Войти',
						type: 'registration',
						fields,
					},
				}),
			],
		})
		store.eventBus.on('get-user', (response) => {
			store.setData('user', response)
			router.go('/')
		})

		store.eventBus.on('user-failed', () => {})

		store.eventBus.on('registration-failed', () => {
			alert('Неверный логин или пароль')
		})
	}

	componentDidRender(): void {
		if (store.getData('user') === undefined) {
			AuthController.getUser()
		}
		renderChildren(this.element, this.props.components)
	}
}
