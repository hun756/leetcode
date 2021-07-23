import Solution from './../src/0003_longest_substring_without_repeating_characters/solution';
import Solution02 from './../src/0003_longest_substring_without_repeating_characters/solution02';

import { expect } from 'chai'

describe('0003 Longest Substring Without Repeating Characters Test', () => {

    let cases = new Map();
    
    cases.set("abcabcbb", 3);
    cases.set("bbbbb", 1);
    cases.set("pwwkew", 3);
    cases.set("", 0);

    it('Solution01 Example Cases', () => {
        let solution = new Solution();

        for (let [key, value] of cases) {
            expect(solution.lengthOfLongestSubstring(key)).to.equal(value);
        }
    });

    it('Solution02 Test Example CAses', () => {
    
        let solution = new Solution02();
    
        for (let [key, value] of cases) {
            expect(solution.lengthOfLongestSubstring(key)).to.equal(value);
        }
    });
});
