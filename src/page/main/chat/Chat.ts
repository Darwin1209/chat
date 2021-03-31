import Store from '../../../store/Store.js'

import Block, { Props } from '../../../modules/block.js'

import { compile } from '../../../utils/templator.js'
import { template } from './Chat.tmp.js'
import { list } from './mock.js'

import { click, submit } from './functions.js'

const store = new Store()

export default class Chat extends Block {
	constructor(props: Props) {
		super('main', {
			...props,
			className: 'main-wrapper',
			events: {
				click,
				submit
			},
		})

		store.eventBus.on('changeChat', (id) => {
			store.setData('currentChat', id)
			const chat = store.getData('chats').find((el) => el.id === id)
			this.setProps({ ...this.props, currentChat: chat })
		})
	}

	render() {
		return compile(template, {
			...this.props,
			list,
			chat: this.props.currentChat,
		})
	}
}
