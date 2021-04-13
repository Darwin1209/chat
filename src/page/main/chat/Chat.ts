import Store from '../../../store/Store'

import Block, { Props } from '../../../modules/block'

import { compile } from '../../../utils/templator'
import { formatDate } from '../../../utils/formatDate'
import { template } from './Chat.tmp'
// import { list } from './mock'

import { click, submit, closeModal } from './functions'

const store = new Store()

export default class Chat extends Block {
	constructor(props: Props) {
		super('main', {
			...props,
			className: 'main-wrapper',
			events: {
				click: (e: any) => {
					click.bind(this)(e)
				},
				submit,
			},
		})

		store.eventBus.on('changeChat', (id) => {
			store.setData('currentChat', id)
			const chat = store.getData('chats').find((el: any) => el.id === id)
			this.setProps({ ...this.props, currentChat: chat })
		})

		store.eventBus.on('user-added', () => {
			closeModal(this)
		})

		store.eventBus.on('user-remove', () => {
			closeModal(this)
		})

		store.eventBus.on('user-action-fail', () => {
			alert('Пользователь не найден')
		})

		store.eventBus.on('get-message', () => {
			const userID = store.getData('user')?.id
			const messBack = store.getData('currentMessage')

			const messages = messBack
				.map((el: any) => ({
					...el,
					me: userID === el.user_id,
					date: formatDate(el.time),
				}))
				.sort((a: any, b: any) => {
					return new Date(a.time).getTime() - new Date(b.time).getTime()
				})

			this.setProps({ ...this.props, list: messages })
		})
	}

	render() {
		return compile(template, {
			...this.props,
			chat: this.props.currentChat,
		})
	}

	componentDidRender() {
		const list = document.querySelector('messages-list')

		list?.scrollTo({
			top: 9999,
		})
	}
}
