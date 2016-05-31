import pSort from './patienceSorting.js'

export default (arr) => {
	var piles = pSort(arr)
	return piles.reduce((ret, cur) => {
		ret.push(cur[0])
		return ret
	}, [])
}