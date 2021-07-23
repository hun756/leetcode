export default class Solution {
    lengthOfLongestSubstring(s: string): number {
        let charSet = new Set();

        let l: number = 0;
        let res: number = 0;

        for (let i = 0; i < s.length; ++i) {
            while (charSet.has(s[i])) {
                charSet.delete(s[l]);
                ++l;
            }

            charSet.add(s[i]);
            res = Math.max(res, i - l + 1);
        }

        return res;

    };
}