import { addUser, removeUser } from '../../../controlers/Controlers.js'

interface Action {
	[key: string]: Function
}

const ACTIONS: Action = {
	'user-add': addUser,
	'user-remove': removeUser,
}

export function click(e) {
	const item = e.target
	const closestItem: HTMLElement = item.closest('button')

	if (closestItem === null) {
		return
	}

	if (closestItem.classList.contains('header-view__button')) {
		closestItem.classList.toggle('header-view__button_active')
		const actions = document.querySelector('.actions')
		actions?.classList.toggle('actions_expand')
	}

	if (closestItem.classList.contains('user-add')) {
		if (store.getData('currentChat') === undefined) {
			alert('Выберите чат')
			return
		}
		this.setProps({
			...this.props,
			context: {
				modal: {
					active: true,
					action: 'user-add',
					title: 'Добавить пользователя',
					button: 'Добавить',
				},
			},
		})
	}

	if (closestItem.classList.contains('user-remove')) {
		if (store.getData('currentChat') === undefined) {
			alert('Выберите чат')
			return
		}
		this.setProps({
			...this.props,
			context: {
				modal: {
					active: true,
					action: 'user-remove',
					title: 'Удалить пользователя',
					button: 'Удалить',
				},
			},
		})
	}

	if (item.className.includes('chat-modal__cross')) {
		this.setProps({
			...this.props,
			context: {
				modal: {
					active: false,
				},
			},
		})
	}
}

export function submit(e) {
	e.preventDefault()
	const form: HTMLFormElement = e.target
	const action: string = form.dataset.type || 'none'
	const login: string = form.querySelector('input')?.value || ''
	const chatID: number = store.getData('currentChat')
	ACTIONS[action](chatID, login)
		.then((resp: any) => {
			console.log(resp)
		})
		.catch((e: any) => {
			const text: HTMLElement =
				form.querySelector('.chat-modal__response') || null
			text.textContent = 'Ошибка, не существующий пользователь'
			console.error(e)
		})
}
