import Store from '../../store/Store.js'

import Block, { Props } from '../../modules/block.js'

import { compile } from '../../utils/templator.js'
import { template } from './Aside.tmp.js'

import { getChat } from '../../api/Controlers.js'

const store = new Store()

export default class Aside extends Block {
	constructor(props: Props) {
		super('aside', {
			...props,
			className: 'chats',
			events: {
				click: (e) => {
					const item = e.target
					if (item.className.includes('chat')) {
						const id = Number(item.dataset.chat)
						store.eventBus.emit('changeChat', id)
						const chats = store.getData('chats')
						const items = chats?.map((el) => {
							if (el.id === id) {
								return { ...el, active: true }
							}
							return el
						})
						this.setProps({
							...this.props,
							items,
						})
					}
				},
			},
		})
	}

	render() {
		return compile(template, {
			list: this.props.items,
		})
	}

	componentDidMount() {
		getChat().then(() => {
			const chats = store.getData('chats')
			this.setProps({
				...this.props,
				items: chats.map(({ id, title, avatar }) => ({
					id,
					title,
					avatar,
				})),
			})
		})
	}
}
