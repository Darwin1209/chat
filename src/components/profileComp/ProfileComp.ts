import Block, { Props } from '../../modules/block.js'

import { template } from './ProfileComp.tmp.js'
import { compile } from '../../utils/templator.js'

import { blur, submit } from './functions.js'

type Event = {
	preventDefault(): void
	target: HTMLFormElement
	currentTarget: HTMLFormElement
}

export default class ProfileComp extends Block {
	constructor(props: Props) {
		super('div', {
			className: 'container flex',
			events: {
				click: (e: Event) => {
					if (e.target.className === 'person__change') {
						this.props.context = {
							...this.props.context,
							changeAvatar: true,
						}
					}

					if (e.target.className === 'modal__submit') {
						this.props.context = {
							...this.props.context,
							changeAvatar: false,
						}
					}
				},
				blur,
				submit,
			},
			...props,
		})
	}

	render(): string {
		return compile(template, this?.props)
	}
}
