import Block from '../../modules/block.js'

import { compile } from '../../utils/templator.js'
import { template } from './Form.tmp.js'
import { submit, focus, blur } from './functions.js'

export default class Form extends Block {
	constructor(props) {
		super('form', {
			events: {
				submit,
				focus,
				blur,
			},
			...props,
		})
	}

	render(): string {
		return compile(template, this.props.context)
	}
}
