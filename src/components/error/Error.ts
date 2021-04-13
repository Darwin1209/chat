import Block, { Props } from '../../modules/block'

import { compile } from '../../utils/templator'
import { template } from './Error.tmp'

export default class Error extends Block {
	constructor(props: Props) {
		super('div', { ...props, className: 'error' })
	}

	render() {
		return compile(template, this.props)
	}
}
