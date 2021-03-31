import Store from '../../../store/Store.js'
import ChatsController from '../../../controlers/chatsControler.js'

import Block, { Props } from '../../../modules/block.js'

import { compile } from '../../../utils/templator.js'
import { template } from './Aside.tmp.js'

import { getChat } from '../../../controlers/Controlers.js'

const store = Store.getInstance()

export default class Aside extends Block {
	constructor(props: Props) {
		super('aside', {
			...props,
			className: 'chats',
			events: {
				click: (e) => {
					const item = e.target
					if (item.className.includes('chat')) {
						const id = Number(item.dataset.chat)
						store.eventBus.emit('changeChat', id)
						const chats = store.getData('chats')
						const items = chats?.map((el) => {
							if (el.id === id) {
								return { ...el, active: true }
							}
							return el
						})
						this.setProps({
							...this.props,
							items,
						})
					}
				},
			},
		})

		store.eventBus.on('get-chats', () => {
			this.eventBus.emit('flow:render')
		})
	}

	render() {
		const chats = store.getData('chats')
		return compile(template, {
			list: chats,
		})
	}

	componentDidMount() {
		ChatsController.getChats()
	}
}
