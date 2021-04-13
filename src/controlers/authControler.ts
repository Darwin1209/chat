import { AuthApi, Login, Registration } from '../api/authApi'
import Router from '../routers/Router'
import Store from '../store/Store'

const router = new Router('#root')
const store = new Store()

const authApi = new AuthApi()

export default class AuthController {
	static getUser() {
		authApi
			.getUser()
			.then((response) => {
				store.setData('user', response)
				store.eventBus.emit('get-user', response)
			})
			.catch(() => {
				store.eventBus.emit('user-failed')
			})
	}

	static login(form: Login) {
		authApi
			.login(form)
			.then((response) => {
				if (response === 'OK') {
					router.go('/')
				}
			})
			.catch((e) => {
				store.eventBus.emit('login-failed')
				console.error(e)
			})
	}

	static registration(form: Registration) {
		authApi
			.registration(form)
			.then((response) => {
				if (response.id) {
					router.go('/')
				}
			})
			.catch((e) => {
				store.eventBus.emit('registration-failed')
				console.error(e)
			})
	}

	static logout() {
		authApi
			.logout()
			.then((response) => {
				if (response === 'OK') {
					router.go('/auth')
				}
			})
			.catch((e) => {
				store.eventBus.emit('logout-failed')
				console.error(e)
			})
	}
}
