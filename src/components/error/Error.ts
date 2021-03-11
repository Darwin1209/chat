import Block, { Props } from '../../modules/block.js'

import { compile } from '../../utils/templator.js'
import { template } from './Error.tmp.js'

export default class Error extends Block {
	constructor(props: Props) {
		super('div', { ...props, className: 'error' })
	}

	render() {
		return compile(template, this.props)
	}
}
