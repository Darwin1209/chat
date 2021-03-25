import Router from '../routers/Router.js'

export function replaceLink() {
	this?._element?.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			new Router('#root').go(link.pathname)
		})
	})
}
