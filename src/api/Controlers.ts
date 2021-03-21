import HTTPTransport from './Fetch.js'

const api = new HTTPTransport('https://ya-praktikum.tech/api/v2')

export function getUser() {
	return new Promise((res) => {
		api
			.get('/auth/user', { data: {}, timeout: 3000 })
			.then(({ response }) => res(JSON.parse(response)))
	})
}
