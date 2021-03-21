function isObjectOrArray<T extends object = object>(object: T) {
	if (Array.isArray(object)) {
		return 'array'
	}
	if (typeof object === 'object') {
		return 'object'
	}
	return 'no'
}

function cloneDeep<T extends object = object>(obj: T) {
	let res: any
	const typeRes = isObjectOrArray(obj)
	if (typeRes === 'array') {
		res = []
	}
	if (typeRes === 'object') {
		res = {}
	}
	Object.keys(obj).forEach((key) => {
		let check = isObjectOrArray(obj[key])
		console.log('types key', check)
		if (check === 'object' || check === 'array') {
			const resDeep = cloneDeep(obj[key])
			console.log('result deep', resDeep)
			if (typeRes === 'array') {
				res = [...res, resDeep]
			} else {
				res = { ...res, [key]: resDeep }
				console.log('result deppes object', res)
				console.log(obj[key] === res[key])
			}
		} else {
			res[key] = obj[key]
			console.log('result items', res)
		}
	})

	return res
}

export default cloneDeep
