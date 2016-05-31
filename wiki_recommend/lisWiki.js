import search from './binarySearch.js'

export default (arr)=>{
	var M = []
	var P = arr.slice(0)

	arr.forEach((val,idx,arr) => {
		let leader = M[M.length-1]
		if (leader !== undefined) {
			if (val > arr[leader]) {
				M.push(idx)
				P[idx] = leader
				return 
			}
		} else {
			M.push(idx)
			P[idx] = undefined
			return 
		}

		let replaceIdx = search(M.reduce((pre,cur)=>{
			pre.push(arr[cur]) 
			return pre
		}, []), val)

		P[idx] = P[M[replaceIdx]]
		M[replaceIdx] = idx

		return 
	})

	var lisLength = M.length
	var leader = M[lisLength - 1]
	for (; lisLength > -1; lisLength--) {
		M[lisLength] = leader
		leader = P[leader]
	}
	return M.slice(1)
}