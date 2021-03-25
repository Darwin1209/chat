import Store from '../../store/Store.js'
import Router from '../../routers/Router.js'

import Block from '../../modules/block.js'
import Aside from '../../components/aside/index.js'
import Chat from '../../components/chat/index.js'

import { getChat, getUser } from '../../api/Controlers.js'

import { renderChildren } from '../../utils/renderChildren.js'
import { listText } from './mock.js'

const router = new Router('#root')
const store = new Store()

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
	}

	render() {
		return ''
	}

	componentDidRender(): void {
		const login: boolean = Boolean(localStorage.getItem('login'))
		if (login !== true) {
			router.go('/auth')
			this.hide()
			return
		}
		renderChildren(this.element, this.props.components)
	}
}
