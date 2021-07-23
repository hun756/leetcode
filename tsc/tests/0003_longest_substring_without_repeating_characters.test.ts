import Solution from './../src/0003_longest_substring_without_repeating_characters/solution';
import { expect } from 'chai'

describe('Longest Substring Without Repeating Characters Test', () => {
    it('Example Cases', () => {
        let cases = new Map();

        cases.set("abcabcbb", 3);
        cases.set("bbbbb", 1);
        cases.set("pwwkew", 3);
        cases.set("", 0);

        let solution = new Solution();

        for (let [key, value] of cases) {
            expect(solution.lengthOfLongestSubstring(key)).to.equal(value);
        }
    })
});