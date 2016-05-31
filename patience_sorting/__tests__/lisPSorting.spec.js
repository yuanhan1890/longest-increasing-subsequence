import chai from 'chai'
import chaiThings from 'chai-things'
chai.should();
chai.use(chaiThings);

import lis from '../lisPSorting.js'

describe('find longest increasing subsequence using patience sorting', () => {  
	let ret = lis([1, 3, 5, 0, 4, 2, 7, 6, 8, 9]) //
	it('has four lis, but we only need one.', () => {
		[[1,3,4,6,8,9],[1,3,5,6,8,9],[1,3,4,7,8,9],[1,3,5,7,8,9]].should.include.something.that.deep.equals(ret)
	})
});