import findAllSubseq from './findAllSubseq.js'
import checkMonotonic from './checkMonotonic.js'

export default (arr) => {
	return findAllSubseq(arr)
            .filter((val) => checkMonotonic(val))
            .reduce((ret, cur) => {
              cur.length > ret.length ? ret = cur: ret 
              return ret},[])
}