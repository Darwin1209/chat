import Route from './Route'

class Router {
	private static __instance: Router
	routes: Route[]
	history: any
	_currentRoute: Route | null
	_rootQuery: string

	constructor(rootQuery: string) {
		if (Router.__instance) {
			return Router.__instance
		}

		this.routes = []
		this.history = window.history
		this._currentRoute = null
		this._rootQuery = rootQuery

		Router.__instance = this
	}

	use(pathname: string, block: any, nameRoute: string = 'title') {
		const route = new Route(pathname, block, {
			rootQuery: this._rootQuery,
			nameRoute,
		})

		this.routes.push(route)
		return this
	}

	start() {
		window.onpopstate = (event: any) => {
			this._onRoute(event.currentTarget.location.pathname)
		}

		this._onRoute(window.location.pathname)
	}

	_onRoute(pathname: string) {
		const route = this.getRoute(pathname)
		if (!route) {
			return
		}

		if (this._currentRoute) {
			this._currentRoute.leave()
		}

		this._currentRoute = route
		route.render()
	}

	go(pathname: string) {
		this.history.pushState({}, '', pathname)
		this._onRoute(pathname)
	}

	back() {
		this.history.back()
	}

	forward() {
		this.history.forward()
	}

	isLogin(): boolean {
		return Boolean(sessionStorage.getItem('login')) === true
	}

	getRoute(pathname: string) {
		return this.routes.find((route) => route.match(pathname))
	}
}

export default Router
