import Block from '../../modules/block.js'

import ProfileComp from '../../components/profileComp/index.js'
import { renderChildren } from '../../utils/renderChildren.js'

export default class Profile extends Block {
	constructor() {
		super('main', {
			components: [
				new ProfileComp({
					context: {
						changePass: true,
						fields: [
							{
								label: 'Старый пароль',
								type: 'password',
								name: 'oldPassword',
								value: 'email@gmail.com',
							},
							{
								label: 'Новый пароль',
								type: 'password',
								name: 'newPassword',
								value: 'newPassword',
								validation: 'pass',
								validText: 'Слабый пароль',
							},
							{
								label: 'Имя',
								type: 'password',
								name: 'newPasswordCopy',
								value: 'newPasswordCopy',
								validation: 'passTwo',
								validText: 'Пароли несовпадают',
							},
						],
					},
				}),
			],
		})
	}

	componentDidRender(): void {
		renderChildren(this.element, this.props.components)
	}
}
