type Func = (...args: any) => void

export class EventBus {
	listeners: {
		[key: string]: Array<Func>,
	}
	constructor() {
		this.listeners = {}
	}

	on(event: string, callback: Func) {
		if (this.listeners[event] === undefined) {
			this.listeners[event] = []
		}
		this.listeners[event].push(callback)
	}

	off(event: string, callback: Func) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`)
		}
		this.listeners[event] = this.listeners[event].filter(
			(fn) => fn !== callback
		)
	}

	emit<T>(event: string, ...args: T[]) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`)
		}
		this.listeners[event].forEach(function (listener) {
			listener(...args)
		})
	}
}
