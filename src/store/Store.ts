export default class Store {
	static __instance: any
	data: any

	constructor() {
		if (Store.__instance) {
			return Store.__instance
		}

		this.data = {}
		Store.__instance = this
	}

	getData(page: string) {
		return this.data[page]
	}

	setData(page: string, payload: any) {
		this.data[page] = { ...this.data[page], ...payload }
	}
}
