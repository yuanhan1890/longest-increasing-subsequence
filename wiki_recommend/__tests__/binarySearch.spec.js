import {expect} from 'chai'

import search from '../binarySearch.js'

describe('binary search', () => {
	describe('should return the position i for arr[i-1] <= target and arr[i] > target', () => {
		it('has non repeated element', ()=>{
			var arr = [1,3,5,7,9,11]
			var targets = [0,2,4,6,8,10,12]
			targets.forEach((val)=>{
				expect(search(arr,val)).to.equal(val/2)
			})
		})
		it('has repeated element', ()=>{
			var arr = [1,2,3,4,5,6,7]
			var targets = [0,1,2,3,4,5,6,7]
			targets.forEach((val)=>{
				expect(search(arr,val)).to.equal(val)
			})
			expect(search(arr,8)).to.equal(7)
		})
	})
})