export default function findAllSubseq(arr){
	var len = arr.length
	var ret = []
	var i, j
	
	for (i = 1; i < Math.pow(2, len); i++) {

		var _temp = [];
		
		for (j = 0; j < len; j++) {
			if (i & (1 << j)) {
				_temp.push(arr[j]);
			}
		}
		
		ret.push(_temp)
	}
	
	return ret
}