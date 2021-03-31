import HTTPTransport from '../api/http.js'
import Store from '../store/Store.js'

const api = new HTTPTransport('https://ya-praktikum.tech/api/v2')
const store = new Store()

const headersJson = { 'Content-type': 'application/json; charset=utf-8' }

export function getUser() {
	return new Promise((res, reject) => {
		api
			.get('/auth/user', { data: {}, timeout: 3000 })
			.then(({ response }) => {
				const data = JSON.parse(response)
				store.setData('user', data)
				res(store.getData('user'))
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function login(data: any) {
	return new Promise((res, reject) => {
		api
			.post('/auth/signin', {
				data,
				timeout: 3000,
				headers: headersJson,
			})
			.then(({ response }) => res(JSON.parse(response)))
			.then(() => {
				getUser()
					.then((result) => res(result))
					.catch((e) => {
						console.error(e)
						reject(e)
					})
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function registration(data: any) {
	return new Promise((res, reject) => {
		api
			.post('/auth/signup', { data, timeout: 3000, headers: headersJson })
			.then(({ response }) => res(JSON.parse(response)))
			.then(() => {
				getUser()
					.then((result) => res(result))
					.catch((e) => {
						console.error(e)
						reject(e)
					})
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function logout() {
	return new Promise((res, reject) => {
		api
			.post('/auth/logout', { data: {}, timeout: 3000 })
			.then(({ response }) => {
				localStorage.removeItem('login')
				res(JSON.parse(response))
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function getChat() {
	return new Promise((res, reject) => {
		api
			.get('/chats', { data: {}, timeout: 3000 })
			.then(({ response }) => {
				const data = JSON.parse(response)
				store.setData('chats', data)
				res(data)
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function addUser(chatId: number, user: string) {
	return new Promise((res, reject) => {
		api
			.put('/chats/users', {
				data: {
					users: [user],
					chatId,
				},
				timeout: 3000,
				headers: headersJson,
			})
			.then(({ response }) => {
				const data = JSON.parse(response)
				res(data)
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function removeUser(chatId: number, user: string) {
	return new Promise((res, reject) => {
		api
			.delete('/chats/users', {
				data: {
					users: [user],
					chatId,
				},
				timeout: 3000,
				headers: headersJson,
			})
			.then(({ response }) => {
				const data = JSON.parse(response)
				res(data)
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function changeUser(user: any) {
	return new Promise((res, reject) => {
		api
			.put('/user/profile', {
				data: { ...user },
				headers: headersJson,
				timeout: 3000,
			})
			.then(({ response }) => {
				const data = JSON.parse(response)
				res(data)
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function changePassword(user: any) {
	return new Promise((res, reject) => {
		api
			.put('/user/password', {
				data: { ...user },
				headers: headersJson,
				timeout: 3000,
			})
			.then(({ response }) => {
				const data = JSON.parse(response)
				res(data)
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function changeAvatar(avatar) {
	console.log(avatar)
	const formData = new FormData()
	formData.append('avatar', avatar)

	return new Promise((res, reject) => {
		api
			.put('/user/profile/avatar', {
				data: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				timeout: 3000,
			})
			.then(({ response }) => {
				const data = JSON.parse(response)
				res(data)
			})
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}
