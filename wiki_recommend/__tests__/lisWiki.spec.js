import chai from 'chai'
import chaiThings from 'chai-things'
chai.should();
chai.use(chaiThings);

import lisWiki from '../lisWiki.js'

function reconstruct(arr) {
	var retIdx = lisWiki(arr)
	return retIdx.reduce((pre, cur) => {
		pre.push(arr[cur])
		return pre
	},[])
}
describe("find longest increasing subsequence using wiki's method", () => {  
	it('has four lis, but we only need one.', () => {
		let arr = [1, 3, 5, 0, 4, 2, 7, 6, 8, 9]
		let ret = reconstruct(arr)
		let rets = [[1,3,4,6,8,9],[1,3,5,6,8,9],[1,3,4,7,8,9],[1,3,5,7,8,9]]
		rets.should.include.something.that.deep.equals(ret)
	})
	it('works for the increasing array', ()=>{
		let arr = [1,2,3,4,5,6,7,8]
		let ret = reconstruct(arr)
		ret.should.be.deep.equal([1,2,3,4,5,6,7,8])
	})
	it('works for the decreasing array', ()=>{
		let arr = [8,7,6,5,4,3,2,1]
		let ret = reconstruct(arr)
		ret.should.be.deep.equal([1])
	})
	it('works for the empty array', ()=>{
		let arr = []
		let ret = reconstruct(arr)
		ret.should.be.deep.equal([])
	})
});