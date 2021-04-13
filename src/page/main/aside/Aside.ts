import ChatsController from '../../../controlers/chatsControler'
import Store from '../../../store/Store'

import Block, { Props } from '../../../modules/block'

import { compile } from '../../../utils/templator'
import { template } from './Aside.tmp'
import { click, submit } from './functions'

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
