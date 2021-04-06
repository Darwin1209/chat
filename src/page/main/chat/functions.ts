import Store from '../../../store/Store.js'
import ChatsController from '../../../controlers/chatsControler.js'

const store = Store.getInstance()

export function click(e: any) {
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

	if (closestItem.classList.contains('chat-modal__cross')) {
		closeModal(this)
	}
}

export function submit(e: any) {
	e.preventDefault()
	const form: HTMLFormElement = e.target
	const action: string = form.dataset.type || 'none'
	const login: string = form.querySelector('input')?.value || ''
	const chatID: number = store.getData('currentChat')
	if (action === 'user-add') {
		ChatsController.addUser(login, chatID)
	}

	if (action === 'user-remove') {
		ChatsController.removeUser(login, chatID)
	}
}

export function closeModal(target: any) {
	target.setProps({
		...target.props,
		context: {
			modal: {
				active: false,
			},
		},
	})
}
