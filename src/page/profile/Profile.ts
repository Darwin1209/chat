import Block from '../../modules/block.js'

import ProfileComp from '../../components/profileComp/index.js'
import { renderChildren } from '../../utils/renderChildren.js'

export default class Profile extends Block {
	constructor() {
		super('main', {
			components: [
				new ProfileComp({
					context: {
						profile: true,
						changeAvatar: false,
						fields: [
							{
								disabled: true,
								label: 'Почта',
								type: 'text',
								name: 'email',
								value: 'email@gmail.com',
								validation: 'mail',
							},
							{
								disabled: true,
								label: 'Логин',
								type: 'text',
								name: 'login',
								value: 'login',
								validation: 'login',
							},
							{
								disabled: true,
								label: 'Имя',
								type: 'text',
								name: 'first_name',
								value: 'Иван',
								validation: 'text',
							},
							{
								disabled: true,
								label: 'Фамилия',
								type: 'text',
								name: 'second_name',
								value: 'Иванов',
								validation: 'text',
							},
							{
								disabled: true,
								label: 'Имя в чате',
								type: 'text',
								name: 'display_name',
								value: 'Иван',
								validation: 'text',
							},
							{
								disabled: true,
								label: 'Телефон',
								type: 'tel',
								name: 'phone',
								value: '+7 (999) 999 30 37',
								validation: 'phone',
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
