const INTEGER_MAX: number = 2147483647;
const INTEGER_MIN: number = -2147483648;

export class Solution {

    reverse(x: number): number {
        const result = parseInt(
            (Math.abs(x) + '')
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(x);

        return (
            result > INTEGER_MAX || 
            result < INTEGER_MIN
        ) ? 0 : result;
    };
}