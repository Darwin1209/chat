import Block from '../../modules/block.js'

import ProfileComp from '../../components/profileComp/index.js'
import { renderChildren } from '../../utils/renderChildren.js'
import { fields } from './mock.js'

export default class Profile extends Block {
	constructor() {
		super('main', {
			components: [
				new ProfileComp({
					context: {
						changePass: true,
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
