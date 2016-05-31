export default function checkMonotonic(arr) {
	return arr.map((val, idx, arr) => [val, arr[idx-1]]).every((val) => val[1] ? val[1] < val[0] : true)
}