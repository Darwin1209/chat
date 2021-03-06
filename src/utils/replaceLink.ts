import Router from '../routers/Router'

export function replaceLink() {
	this?._element?.querySelectorAll('a').forEach((link: HTMLAnchorElement) => {
		link.addEventListener('click', (e:Event) => {
			e.preventDefault()
			new Router('#root').go(link.pathname)
		})
	})
}
