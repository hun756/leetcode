export default class Solution {
    lengthOfLongestSubstring(s: string): number {
        let max: number = 0;
        let sub: string = "";
    
        [...s].forEach((c) => {
            let idx: number = sub.indexOf(c, 0);
    
            if (idx < 0) {
                sub += c;
                max = sub.length > max ? sub.length : max;
            }
            else {
                sub = sub.substr(idx + 1) + c;
            }
        });
        
        return max;
    }
}
