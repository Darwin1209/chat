import Block from '../../modules/block'

import ProfileComp from '../../components/profileComp/index'

import { renderChildren } from '../../utils/renderChildren'
import { fields } from './mock'

export default class Profile extends Block {
	constructor() {
		super('main', {
			components: [
				new ProfileComp({
					context: {
						profile: true,
						changeAvatar: false,
						fields,
					},
				}),
			],
		})
	}

	componentDidRender(): void {
		renderChildren(this.element, this.props.components)
	}
}
