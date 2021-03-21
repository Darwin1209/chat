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

merge(
	{
		a: {
			b: {
				a: 2,
			},
		},
		d: 5,
	},
	{
		a: {
			b: {
				c: 1,
			},
		},
	}
)
/*
  {
    a: {
      b: {
        a: 2,
        c: 1,
      }
    },
    d: 5,
  }
*/
