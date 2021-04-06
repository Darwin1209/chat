import { UserApi, Password, Profile } from '../api/userApi.js'
import Router from '../routers/Router.js'
import Store from '../store/Store.js'

const router = new Router('#root')
const store = new Store()

const userApi = new UserApi()

export default class UserController {
	static changeProfile(form: Profile) {
		userApi
			.changeProfile(form)
			.then((response) => {
				store.setData('user', response)
				store.eventBus.emit('change-user', response)
				router.go('/profile')
			})
			.catch((e) => {
				store.eventBus.emit('change-user-failed')
				console.error(e)
			})
	}

	static changePassword(form: Password) {
		userApi
			.changePassword(form)
			.then(() => {
				router.go('/profile')
			})
			.catch((e) => {
				store.eventBus.emit('change-pass-failed')
				console.error(e)
			})
	}

	static changeAvatar(avatar: any) {
		const formData = new FormData()
		formData.append('avatar', avatar)
		userApi
			.changeAvatar(formData)
			.then((response) => {
				store.setData('user', response)
				store.eventBus.emit('change-user', response)
			})
			.catch((e) => {
				store.eventBus.emit('change-avatar-failed')
				console.error(e)
			})
	}
}
