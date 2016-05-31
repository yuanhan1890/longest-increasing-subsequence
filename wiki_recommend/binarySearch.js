export default (arr, target) => {
	if (arr.length === 0) {
		return -1
	}
	let lo = 0
	let hi = arr.length

	// 0 | arr[0] | 1 | arr[1] | 2 | arr[2] | ... | i | arr[i] | j | arr[j] | ... | arr[len-1] | len  
	while(lo <= hi) {
		let mid = ((lo + hi) / 2) | 0
		if (target >= arr[mid]) {
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}

	return lo
}