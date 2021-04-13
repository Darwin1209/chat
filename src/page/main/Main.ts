import Store from '../../store/Store'
import Router from '../../routers/Router'
import AuthController from '../../controlers/authControler'

import Block from '../../modules/block'

import Aside from './aside/index'
import Chat from './chat/index'

import { renderChildren } from '../../utils/renderChildren'

const router = new Router('#root')
const store = new Store()

export default class Main extends Block {
	constructor() {
		super('div', {
			className: 'container flex',
			components: [new Aside({}), new Chat({})],
		})

		store.eventBus.on('user-failed', () => {
			router.go('/auth')
		})

		store.eventBus.on('get-user', (response) => {
			store.setData('user', response)
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
