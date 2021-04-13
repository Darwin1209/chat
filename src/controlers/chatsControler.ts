import { ChatsApi } from '../api/chatsApi.js'
import Store from '../store/Store.js'

const PATH = 'wss://ya-praktikum.tech/ws/chats' //<USER_ID>/<CHAT_ID>/<TOKEN_VALUE>

const store = new Store()

const chatsApi = new ChatsApi()

export default class ChatsController {
	socket: WebSocket

	static getChats() {
		chatsApi
			.getChats()
			.then((response) => {
				store.setData('chats', response)
				store.eventBus.emit('get-chats')
			})
			.catch((e) => {
				store.eventBus.emit('chats-error')
				console.error(e)
			})
	}

	static changeChat(id: number) {
		chatsApi.getToken(id).then(({ token }) => {
			const userID = store.getData('user').id
			// @ts-ignore
			this.socket = new WebSocket(`${PATH}/${userID}/${id}/${token}`)

			// @ts-ignore
			this.socket.addEventListener('open', () => {
				// @ts-ignore
				this.socket.send(
					JSON.stringify({
						content: '0',
						type: 'get old',
					})
				)
			})

			// @ts-ignore
			this.socket.addEventListener('message', (e: any) => {
				const data = JSON.parse(e.data)
				const messages = store.getData('currentMessage')
				if (Array.isArray(data)) {
					store.setData('currentMessage', data)
				} else {
					messages.push(data)
				}
				store.eventBus.emit('get-message')
			})
			// @ts-ignore
			this.socket.addEventListener('error', (e: any) => {
				console.error(e.message)
			})
		})
	}

	static sendMessage(content: string) {
		// @ts-ignore
		this.socket.send(JSON.stringify({ content, type: 'message' }))
	}

	static createChat(title: string) {
		chatsApi
			.createChat(title)
			.then(({ id }) => {
				const chats = store.getData('chats')
				chats.push({ id, title })
				store.eventBus.emit('get-chats')
			})
			.catch((e) => {
				store.eventBus.emit('add-chat-error')
				console.error(e)
			})
	}

	static addUser(user: string, chatId: string) {
		chatsApi
			.addUser(user, chatId)
			.then((response) => {
				if (response === 'OK') {
					store.eventBus.emit('user-added')
				}
			})
			.catch((e) => {
				store.eventBus.emit('user-action-fail')
				console.error(e)
			})
	}

	static removeUser(user: string, chatId: string) {
		chatsApi
			.addUser(user, chatId)
			.then((response) => {
				if (response === 'OK') {
					store.eventBus.emit('user-remove')
				}
			})
			.catch((e) => {
				store.eventBus.emit('user-action-fail')
				console.error(e)
			})
	}
}
