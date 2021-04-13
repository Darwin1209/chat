import Store from '../../store/Store'
import Router from '../../routers/Router'

import Block from '../../modules/block'
import Form from '../../components/form/index'

import { renderChildren } from '../../utils/renderChildren'

import AuthController from '../../controlers/authControler'

import { fields } from './mock'

const router = new Router('#root')
const store = Store.getInstance()

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
						type: 'auth',
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

		store.eventBus.on('login-failed', () => {
			alert('Неверный логин или пароль')
		})
	}

	render() {
		return ''
	}

	componentDidRender(): void {
		if (store.getData('user') === undefined) {
			AuthController.getUser()
		}
		renderChildren(this.element, this.props.components)
	}
}
