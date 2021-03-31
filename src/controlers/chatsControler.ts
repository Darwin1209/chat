import { ChatsApi } from '../api/chatsApi.js'
import Store from '../store/Store.js'

const store = new Store()

const chatsApi = new ChatsApi()

export default class ChatsController {
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

	static addUser(user: string, chatId: number) {
		chatsApi
			.addUser(user, chatId)
			.then((response) => {
				if (response === 'Ok') {
					store.eventBus.emit('user-added')
				}
			})
			.catch((e) => {
				store.eventBus.emit('user-action-fail')
				console.error(e)
			})
	}

	static removeUser(user: string, chatId: number) {
		chatsApi
			.addUser(user, chatId)
			.then((response) => {
				if (response === 'Ok') {
					store.eventBus.emit('user-remove')
				}
			})
			.catch((e) => {
				store.eventBus.emit('user-action-fail')
				console.error(e)
			})
	}
}
