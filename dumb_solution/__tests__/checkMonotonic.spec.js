import {expect} from 'chai'
import checkMonotonic from '../checkMonotonic.js'

describe('check whether an array is monotonic increasing', () => {  
	describe('check nonmonotonic increasing array', () => {
		expect(checkMonotonic([1, 3, 5, 0, 4])).to.equal(false)
	})
	describe('check monotonic increasing array', () => {
		expect(checkMonotonic([1, 3, 5, 7, 9])).to.equal(true)
	})
});