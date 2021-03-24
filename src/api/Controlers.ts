import HTTPTransport from './Fetch.js'

const api = new HTTPTransport('https://ya-praktikum.tech/api/v2')

const headersJson = { 'Content-type': 'application/json; charset=utf-8' }

export function getUser() {
	return new Promise((res, reject) => {
		api
			.get('/auth/user', { data: {}, timeout: 3000 })
			.then(({ response }) => res(JSON.parse(response)))
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function login(data) {
	return new Promise((res, reject) => {
		api
			.post('/auth/signin', {
				data,
				timeout: 3000,
				headers: headersJson,
			})
			.then(({ response }) => res(JSON.parse(response)))
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}

export function registration(data) {
	return new Promise((res, reject) => {
		api
			.post('/auth/signup', { data, timeout: 3000, headers: headersJson })
			.then(({ response }) => res(JSON.parse(response)))
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
			.then(({ response }) => res(JSON.parse(response)))
			.catch((e) => {
				console.error(e)
				reject(e)
			})
	})
}
