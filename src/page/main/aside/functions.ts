import Store from '../../../store/Store'
import ChatsController from '../../../controlers/chatsControler'

const store = Store.getInstance()

export function click(e: any) {
	const item = e.target
	const closestItem: HTMLElement = item.closest('button')
	const closestChat: HTMLElement = item.closest('li')
	if (closestChat?.classList?.contains('chats-list__item')) {
		const id = Number(item.dataset.chat)
		store.eventBus.emit('changeChat', id)
		store.setData('currentMessage', [])
		const chats = store.getData('chats')
		const items = chats?.map((el: any) => {
			if (el.id === id) {
				return { ...el, active: true }
			}
			return el
		})
		ChatsController.changeChat(id)
		this.setProps({
			...this.props,
			items,
		})
	}

	if (closestItem === null) {
		return
	}

	if (closestItem?.classList?.contains('add-chat')) {
		this.setProps({
			...this.props,
			context: {
				modal: {
					active: true,
					action: 'chat-add',
					title: 'Создать чат',
					button: 'Создать',
				},
			},
		})
	}

	if (closestItem.classList.contains('chat-modal__cross')) {
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

export function submit(e: any) {
	e.preventDefault()
	const form: HTMLFormElement = e.target
	const action: string = form.dataset.type || 'none'
	const title: string = form.querySelector('input')?.value || ''
	if (action === 'chat-add') {
		ChatsController.createChat(title)
	}
}
