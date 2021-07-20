import Solution from './../src/0013_roman_to_integer/soluiton';
import { expect } from 'chai'

describe('0013 Roman to Integer Test', () => {
    it('Example Cases', () => {
        let cases = new Map();

        cases.set("III", 3)
        cases.set("IV", 4)
        cases.set("IX", 9)
        cases.set("LVIII", 58)
        cases.set("MCMXCIV", 1994)

        let solution = new Solution();

        for (let [key, value] of cases) {
            expect(solution.romanToInt(key)).to.equal(value);
        }
    })
});