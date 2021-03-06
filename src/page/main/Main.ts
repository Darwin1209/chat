import Block from '../../modules/block.js'

import Aside from '../../components/aside/index.js'
import Chat from '../../components/chat/index.js'

import { renderChildren } from '../../utils/renderChildren.js'

const listText: object[] = [
	{
		name: 'Сергей',
		message: 'Изображение',
		data: '10:32',
		count: 1,
	},
	{
		name: 'Илья',
		message: 'Друзья, выпуск новостей!',
		data: '10:32',
		count: 1,
	},
	{
		name: 'Игорян',
		message: 'И Human Design рекомендуют',
		data: '10:32',
		count: 1,
	},
	{
		name: 'Игорян',
		message: 'Какой-то текст?',
		data: '10:32',
		count: 1,
	},
	{
		name: 'Игорян',
		message: 'Какой-то текст?',
		data: '10:32',
		count: 1,
	},
	{
		name: 'Игорян',
		message: 'Какой-то текст?',
		data: '10:32',
		count: 1,
	},
	{
		name: 'Игорян',
		message: 'Какой-то текст?',
		data: '10:32',
		count: 1,
	},
	{
		name: 'Игорян',
		message: 'Какой-то текст?',
		data: '10:32',
		count: 1,
	},
]

export default class Main extends Block {
	constructor() {
		super('div', {
			className: 'container flex',
			components: [
				new Aside({
					items: listText,
				}),
				new Chat({}),
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
