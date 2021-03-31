import Router from '../../routers/Router.js'
import Store from '../../store/Store.js'

import Block, { Props } from '../../modules/block.js'

import { template } from './ProfileComp.tmp.js'
import { compile } from '../../utils/templator.js'

import { blur, submit, click } from './functions.js'
import { getUser } from '../../controlers/Controlers.js'

const router = new Router('#root')
const store = new Store()

type Event = {
	preventDefault(): void
	target: HTMLFormElement
	currentTarget: HTMLFormElement
}

const getInfo = (target) => {
	const user = store.getData('user')

	const fields = target.props.context.fields
	console.log(user)
	fields.forEach((el) => {
		if (el.name in user) {
			el.value = user[el.name]
		}
	})
	console.log(target)
	target.setProps({
		...target.props,
		userInfo: user,
		context: { ...target.props.context, fields: fields },
	})
}

export default class ProfileComp extends Block {
	constructor(props: Props) {
		super('div', {
			className: 'container flex',
			events: {
				click: (e) => {
					click(e, this)
				},
				blur,
				submit,
			},
			...props,
		})
		store.eventBus.on('getUser', getInfo)
	}

	render(): string {
		const login: boolean = Boolean(localStorage.getItem('login'))
		if (login !== true) {
			router.go('/auth')
			this.hide()
			return ''
		}

		return compile(template, this?.props)
	}

	componentDidMount() {
		getUser().then((resp) => {
			store.eventBus.emit('getUser', this)
		})
	}
}
