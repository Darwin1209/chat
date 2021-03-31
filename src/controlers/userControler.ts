import { UserApi, Login, Registration } from '../api/userApi.js'
import Router from '../routers/Router.js'
import Store from '../store/Store.js'

const router = new Router('#root')
const store = Store.getInstance()

const userApi = new UserApi()

export default class UserController {
	static getUser() {
		userApi
			.getUser()
			.then((response) => {
				console.log(response)
				store.setData('user', response)
				store.eventBus.emit('get-user', response)
			})
			.catch((e) => {
				store.eventBus.emit('user-failed')
				console.error(e)
			})
	}

	static login(form: Login) {
		userApi
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
		userApi
			.registration(form)
			.then((response) => {
				if (response === 'OK') {
					router.go('/')
				}
			})
			.catch((e) => {
				store.eventBus.emit('registration-failed')
				console.error(e)
			})
	}

	static logout() {
		userApi
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
