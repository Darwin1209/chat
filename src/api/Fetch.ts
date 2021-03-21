enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

interface RequestHeaders {
	[key: string]: string
}

type Options = {
	method: string
	data?: any
	timeout?: number
	headers?: RequestHeaders
	retries?: number
}

// ?type OptionsWithoutMethod = Omit<Options, 'method'>

type StringIndexed = Record<string, any>;

function queryStringify(data: any): string {
	return Object.entries(data)
		.reduce((acc, [key, value]) => (acc = `${acc}${key}=${value}&`), '')
		.slice(0, -1)
}

class HTTPTransport {
	_path: string

	constructor(path: string) {
		this._path = path
	}

	get(url: string, options: Options): Promise<XMLHttpRequest> {
		const { data, timeout } = options
		return this.request(
			`${url}?${queryStringify(data)}`,
			{
				...options,
				method: METHOD.GET,
			},
			timeout
		)
	}

	post(url: string, options: Options): Promise<XMLHttpRequest> {
		const { timeout } = options
		return this.request(
			url,
			{
				...options,
				method: METHOD.POST,
			},
			timeout
		)
	}

	delete(url: string, options: Options): Promise<XMLHttpRequest> {
		const { timeout } = options
		return this.request(
			url,
			{
				...options,
				method: METHOD.DELETE,
			},
			timeout
		)
	}

	put(url: string, options: Options): Promise<XMLHttpRequest> {
		const { timeout } = options
		return this.request(
			url,
			{
				...options,
				method: METHOD.PUT,
			},
			timeout
		)
	}

	request(
		url: string,
		options: Options,
		timeout: number = 5000
	): Promise<XMLHttpRequest> {
		const { method, data, headers } = options

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open(method, url)
			xhr.timeout = timeout

			if (headers !== undefined) {
				Object.entries(headers).forEach(([key, value = '']) => {
					xhr.setRequestHeader(key, value)
				})
			}

			xhr.onload = function () {
				resolve(xhr)
			}

			const handleError = (err: ProgressEvent) => {
				reject(err)
			}

			xhr.onabort = handleError
			xhr.onerror = handleError
			xhr.ontimeout = handleError

			if (method === METHOD.GET || !data) {
				xhr.send()
			} else {
				xhr.send(JSON.stringify(data))
			}
		})
	}
}

// function request<TResponse>(
// 	url: string,
// 	options: Options = { method: METHOD.GET }
// ): Promise<TResponse> {
// 	const { method, data } = options

// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()
// 		xhr.open(method, url)
// 		xhr.setRequestHeader('Content-Type', 'text/plain')

// 		xhr.onload = function () {
// 			resolve(xhr)
// 		}

// 		const handleError = (err: ProgressEvent) => {
// 			console.log(err)
// 		}

// 		xhr.onabort = handleError
// 		xhr.onerror = handleError
// 		xhr.ontimeout = handleError

// 		if (method === METHOD.GET || !data) {
// 			xhr.send()
// 		} else {
// 			xhr.send(JSON.stringify(data))
// 		}
// 	})
// }
