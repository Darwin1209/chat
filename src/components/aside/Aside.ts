import Block, { Props } from '../../modules/block.js'

import { compile } from '../../utils/templator.js'
import { template } from './Aside.tmp.js'

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
}
