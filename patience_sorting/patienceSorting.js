export default (arr) => {
	return arr.reduce((ret, cur, idx, arr) => {
		let lo = 0
		let hi = ret.length

		while(lo <= hi) {
			let mid = ((lo + hi) / 2) | 0
			let pile = ret[mid] || []
			if (cur >= pile[pile.length - 1]) {
				lo = mid + 1
			} else {
				hi = mid - 1
			}
		}

		let insertIdx = lo 

		if (insertIdx === ret.length) {
			ret.push([cur])
		} else {
			ret[insertIdx].push(cur)
		}

		return ret
	}, []) 
}