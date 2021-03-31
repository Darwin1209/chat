import Store from '../../store/Store.js'
import Router from '../../routers/Router.js'

import Block from '../../modules/block.js'
import Aside from '../../components/aside/index.js'
import Chat from '../../components/chat/index.js'

// import { getChat, getUser } from '../../controlers/Controlers.js'

import { renderChildren } from '../../utils/renderChildren.js'
import UserController from '../../controlers/userControler.js'

const router = new Router('#root')
const store = Store.getInstance()

export default class Main extends Block {
	constructor() {
		super('div', {
			className: 'container flex',
			components: [
				new Aside({
					items: [],
				}),
				new Chat({}),
			],
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
			UserController.getUser()
		}
		renderChildren(this.element, this.props.components)
	}
}
