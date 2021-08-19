import { Solution } from '../src/0009_palindrome_number/solution'
import { expect } from 'chai'

describe('0009 Palindrome Number', () => {
    it('Example Cases', () => {
        let cases = new Map();

        cases.set(121, true)
        cases.set(-121, false)
        cases.set(10, false)
        cases.set(-101, false)

        let solution = new Solution();

        for (let [key, value] of cases) {
            expect(solution.isPalindrome(key)).to.equal(value);
        }
    })
});