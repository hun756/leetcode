export class Solution {
    isPalindrome(x: number): boolean {
        return Number(
            String(x)
                .split('')
                .reverse()
                .join('')
        ) === x
    };
}