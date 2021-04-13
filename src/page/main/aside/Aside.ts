import ChatsController from '../../../controlers/chatsControler.js'
import Store from '../../../store/Store.js'

import Block, { Props } from '../../../modules/block.js'

import { compile } from '../../../utils/templator.js'
import { template } from './Aside.tmp.js'
import { click, submit } from './functions.js'

const store = Store.getInstance()

export default class Aside extends Block {
	constructor(props: Props) {
		super('aside', {
			...props,
			className: 'chats',
			events: {
				click: (e: any) => {
					click.bind(this)(e)
				},
				submit,
			},
		})

		store.eventBus.on('get-chats', () => {
			this.eventBus.emit('flow:render')
		})

		store.eventBus.on('add-chat-error', () => {
			alert('Ошибка в создании чата')
		})
	}

	render() {
		const chats = store.getData('chats')
		return compile(template, {
			list: chats,
			context: this.props.context,
		})
	}

	componentDidMount() {
		ChatsController.getChats()
	}
}
