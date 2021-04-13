import { Props } from '../modules/block'
import { renderDom } from '../utils/renderDom'

export default class Route {
	_pathname: string
	_blockClass: any
	_block: any
	_props: Props
	_name: string | undefined

	constructor(pathname: string, view: any, props: Props) {
		this._pathname = pathname
		this._blockClass = view
		this._block = null
		this._props = props
		this._name = this._props.nameRoute
	}

	navigate(pathname: string) {
		if (this.match(pathname)) {
			this._pathname = pathname
			this.render()
		}
	}

	leave() {
		if (this._block) {
			this._block.hide()
		}
	}

	match(pathname: string) {
		return this.isEqual(pathname, this._pathname)
	}

	render() {
		const { nameRoute } = this._props
		const title = document.head.querySelector('title') || document.head
		title.textContent = nameRoute || 'title'

		if (!this._block) {
			this._block = new this._blockClass()
			renderDom(this._props.rootQuery, this._block)
			return
		}

		this._block.show()
	}

	private isEqual(lhs: string, rhs: string): boolean {
		return lhs === rhs
	}
}
