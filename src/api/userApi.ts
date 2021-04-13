import HTTPTransport from './http'
import { BASE_URL, PROFILE, AVATAR, PASSWORD } from './constant'

const api = new HTTPTransport(BASE_URL)

const headersJson = {
	'Content-Type': 'application/json',
}

export type Profile = {
	first_name: 'string'
	second_name: 'string'
	display_name: 'string'
	login: 'string'
	email: 'string'
	phone: 'string'
}

export type Avatar = {
	avatar: File
}

export type Password = {
	oldPassword: 'string'
	newPassword: 'string'
}

export class UserApi {
	async changeProfile(form: Profile) {
		try {
			const { response, status } = await api.put(PROFILE, {
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

	async changeAvatar(form: FormData) {
		try {
			const { response, status } = await api.put(AVATAR, {
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

	async changePassword(form: Password) {
		try {
			const { response, status } = await api.put(PASSWORD, {
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
}
