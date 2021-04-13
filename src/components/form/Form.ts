import Block, { Props } from '../../modules/block'

import { compile } from '../../utils/templator'
import { template } from './Form.tmp'
import { submit, focus, blur } from './functions'

export default class Form extends Block {
	constructor(props: Props) {
		super('form', {
			...props,
			events: {
				submit: (e: any) => {
					submit(e, this.props?.context?.type)
				},
				focus,
				blur,
			},
		})
	}

	render(): string {
		return compile(template, this?.props)
	}
}
