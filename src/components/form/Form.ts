import Block, { Props } from '../../modules/block.js'

import { compile } from '../../utils/templator.js'
import { template } from './Form.tmp.js'
import { submit, focus, blur } from './functions.js'

export default class Form extends Block {
	constructor(props: Props) {
		super('form', {
			...props,
			events: {
				submit,
				focus,
				blur,
			},
		})
	}

	render(): string {
		return compile(template, this?.props)
	}
}
