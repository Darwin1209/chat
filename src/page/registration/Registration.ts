import Store from '../../store/Store.js'
import Router from '../../routers/Router.js'

import Block from '../../modules/block.js'

import Form from '../../components/form/index.js'

import { renderChildren } from '../../utils/renderChildren.js'
import { fields } from './mock.js'

import UserController from '../../controlers/authControler.js'

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

		store.eventBus.on('registration-failed', () => {
			alert('Неверный логин или пароль')
		})
	}

	// render() {
	// 	return ''
	// }

	componentDidRender(): void {
		if (store.getData('user') === undefined) {
			UserController.getUser()
		}
		renderChildren(this.element, this.props.components)
	}
}
