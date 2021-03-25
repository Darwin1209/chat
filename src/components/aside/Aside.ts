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
		})
	}

	render() {
		return compile(template, { list: this.props.items })
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
