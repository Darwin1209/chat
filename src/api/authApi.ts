import HTTPTransport from './http'
import { BASE_URL, GET_USER, SIGN_IN, SIGN_UP, LOGOUT } from './constant'

const api = new HTTPTransport(BASE_URL)

const headersJson = {
	'Content-Type': 'application/json',
}

export type Registration = {
	first_name: 'string'
	second_name: 'string'
	login: 'string'
	email: 'string'
	password: 'string'
	passwordTwo?: 'string'
	phone: 'string'
}

export type Login = {
	login: 'string'
	password: 'string'
}

export class AuthApi {
	async getUser() {
		try {
			const { response, status } = await api.get(GET_USER, {})
			if (status !== 200) {
				throw new Error(response)
			}
			return JSON.parse(response)
		} catch (err) {
			throw new Error(err)
		}
	}

	async registration(form: Registration) {
		try {
			const { response, status } = await api.post(SIGN_UP, {
				data: form,
				headers: headersJson,
			})
			if (status !== 200) {
				throw new Error(response)
			}
			return JSON.parse(response)
		} catch (err) {
			throw new Error(err)
		}
	}

	async login(form: Login) {
		try {
			const { response, status } = await api.post(SIGN_IN, {
				data: form,
				headers: headersJson,
			})
			if (status !== 200) {
				throw new Error(response)
			}
			return (response)
		} catch (err) {
			throw new Error(err)
		}
	}

	async logout() {
		try {
			const { response, status } = await api.post(LOGOUT, {})
			if (status !== 200) {
				throw new Error(response)
			}
			return (response)
		} catch (err) {
			throw new Error(err)
		}
	}
}
