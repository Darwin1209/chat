import { EventBus } from './../utils/EventBus.js'

export default class Store {
	static __instance: Store
	data: any
	eventBus: EventBus
	_events: object

	constructor() {
		if (Store.__instance) {
			return Store.__instance
		}

		this.eventBus = new EventBus()
		this.data = {}
		Store.__instance = this
	}

	getData(page: string) {
		return this.data[page]
	}

	setData(page: string, payload: any) {
		this.data[page] = payload
	}

	static getInstance() {
		return this.__instance
	}
}
