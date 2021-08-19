import {Solution} from './../src/0007_reverse_integer/soluiton';
import { expect } from 'chai'

describe('0007 Reverse Integer Test', () => {
    it('Example Cases', () => {
        let cases = new Map();  

        cases.set(123, 321)
        cases.set(-123, -321)
        cases.set(120, 21)
        cases.set(0, 0)

        let solution = new Solution();

        for (let [key, value] of cases) {
            expect(solution.reverse(key)).to.equal(value);
        }
    })
});