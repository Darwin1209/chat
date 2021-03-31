type Indexed<T = {}> = {
	[key in string]: T
}

function merge(lhs: Indexed, rhs: Indexed): Indexed {
	for (let key in rhs) {
		if (typeof rhs[key] === 'object' && typeof lhs[key] === 'object') {
			lhs[key] = merge(lhs[key], rhs[key])
		} else {
			return { ...lhs, ...rhs }
		}
	}
	return lhs
}

export default merge
