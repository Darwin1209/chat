import Block from '../../modules/block.js'

import Form from '../../components/form/index.js'

import { renderChildren } from '../../utils/renderChildren.js'
import { fields } from './mock.js'

export default class Registration extends Block {
	constructor() {
		super('main', {
			className: 'main',
			components: [
				new Form({
					className: 'form form-reg form-reg_registr',
					context: {
						title: 'Регистрация',
						submit: 'Зарегистрироваться',
						link: '/auth',
						linkLabel: 'Войти',
						type: 'registration',
						fields,
					},
				}),
			],
		})
	}

	render() {
		return ''
	}

	componentDidRender(): void {
		renderChildren(this.element, this.props.components)
	}
}
