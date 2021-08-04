export class Solution {
    fib(n: number): number {
        return n > 1 ? this.fib(n - 1) + this.fib(n - 2) : n;
    };
}