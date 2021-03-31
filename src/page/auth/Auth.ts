import Store from '../../store/Store.js'
import Router from '../../routers/Router.js'

import Block from '../../modules/block.js'
import Form from '../../components/form/index.js'

import { renderChildren } from '../../utils/renderChildren.js'

import UserController from '../../controlers/authControler.js'

import { fields } from './mock.js'

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

		store.eventBus.on('login-failed', () => {
			alert('Неверный логин или пароль')
		})
	}

	render() {
		return ''
	}

	componentDidRender(): void {
		if (store.getData('user') === undefined) {
			UserController.getUser()
		}
		renderChildren(this.element, this.props.components)
	}
}
