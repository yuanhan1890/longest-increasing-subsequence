import {expect} from 'chai'

import sort from '../patienceSorting.js'

describe('patience sorting', () => {
	describe('return piles produced by patience sorting', () => {
		it('is normal condition', ()=>{
			let arr = [1,3,5,0,4,2,7,6,8,9]
			expect(sort(arr)).to.eql(
				[
					[1,0],
					[3,2],
					[5,4],
					[7,6],
					[8],
					[9]
				]
			)
		})	
		it('is the increasing array', ()=>{
			let arr = [1,2,3,4,5,6,7,8,9]
			expect(sort(arr)).to.eql([
				[1],
				[2],
				[3],
				[4],
				[5],
				[6],
				[7],
				[8],
				[9]
			])
		})
		it('is the decreasing array', ()=>{
			let arr = [9,8,7,6,5,4,3,2,1]
			expect(sort(arr)).to.eql([
				[9,8,7,6,5,4,3,2,1]
			])
		})
	})
})