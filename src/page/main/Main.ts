import Store from '../../store/Store.js'
import Router from '../../routers/Router.js'
import AuthController from '../../controlers/authControler.js'

//Благодарю за ссылку про архитектуру, на следующей итерации попытаюсь улучшить

import Block from '../../modules/block.js'

//Попытка использовать импорт по умолчанию, но не знаю как использовать без webpack
import Aside from './aside/index.js'
import Chat from './chat/index.js'

import { renderChildren } from '../../utils/renderChildren.js'

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
