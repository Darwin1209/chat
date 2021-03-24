type Indexed<T = {}> = {
	[key in string]: T
}

function isEqualMy(a: Indexed, b: Indexed): boolean {
	for (let key in a) {
		if (typeof a[key] === 'object' && typeof b[key] === 'object') {
			isEqual(a[key], b[key])
		} else if (a[key] !== b[key]) {
			return false
		}
	}
	return true
}

type PlainObject<T = any> = {
	[k in string]: T
}

function isArray(value: unknown): value is [] {
	return Array.isArray(value)
}

function isPlainObject(value: unknown): value is PlainObject {
	return (
		typeof value === 'object' &&
		value !== null &&
		value.constructor === Object &&
		Object.prototype.toString.call(value) === '[object Object]'
	)
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
	return isPlainObject(value) || isArray(value)
}

function isEqual(lhs: PlainObject, rhs: PlainObject) {
	// Сравнение количества ключей объектов и массивов
	if (Object.keys(lhs).length !== Object.keys(rhs).length) {
		return false
	}

	for (const [key, value] of Object.entries(lhs)) {
		const rightValue = rhs[key]
		if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
			if (isEqual(value, rightValue)) {
				continue
			}
			return false
		}

		if (value !== rightValue) {
			return false
		}
	}

	return true
}

export default isEqual