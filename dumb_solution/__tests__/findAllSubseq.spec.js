import {expect} from 'chai'
import findAllSubseq from '../findAllSubseq.js'

describe('find all subsequence', () => {  
	let ret = findAllSubseq([1,2,3])
	it('should return all permutations except the empty one', () => {
		expect(ret.length).to.equal(7)
	});
	it('should return these permutations in binary increasing order 001 ~ 111', () => {
		expect(ret).to.eql([
			[1], 	//001
			[2],    //010
			[1,2], 	//011
			[3], 	//100
			[1,3], 	//101
			[2,3], 	//110
			[1,2,3] //111
		])
	})
});