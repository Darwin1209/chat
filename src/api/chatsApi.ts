import HTTPTransport from './http.js'
import { BASE_URL, CHATS, CHATS_USER, CHATS_TOKEN } from './constant.js'

const api = new HTTPTransport(BASE_URL)

const headersJson = {
	'Content-Type': 'application/json',
}

export class ChatsApi {
	async getChats() {
		try {
			const { response, status } = await api.get(CHATS, {})
			if (status !== 200) {
				throw new Error(response)
			}
			return JSON.parse(response)
		} catch (err) {
			throw new Error(err)
		}
	}

	async getToken(id: number) {
		try {
			const { response, status } = await api.post(`${CHATS_TOKEN}/${id}`, {})
			if (status !== 200) {
				throw new Error(response)
			}
			return JSON.parse(response)
		} catch (e) {
			throw new Error(e)
		}
	}

	async createChat(title: string) {
		try {
			const { response, status } = await api.post(CHATS, {
				data: {
					title,
				},
				headers: headersJson,
			})

			if (status !== 200) {
				throw new Error(response)
			}
			return JSON.parse(response)
		} catch (e) {
			throw new Error(e)
		}
	}

	async addUser(user: string, chatId: string) {
		try {
			const { response, status } = await api.put(CHATS_USER, {
				data: {
					users: [user],
					chatId,
				},
				headers: headersJson,
			})
			if (status !== 200) {
				throw new Error(response)
			}
			return response
		} catch (err) {
			throw new Error(err)
		}
	}

	async removeUser(user: string, chatId: string) {
		try {
			const { response, status } = await api.delete(CHATS_USER, {
				data: {
					users: [user],
					chatId,
				},
				headers: headersJson,
			})
			if (status !== 200) {
				throw new Error(response)
			}
			return response
		} catch (err) {
			throw new Error(err)
		}
	}
}
