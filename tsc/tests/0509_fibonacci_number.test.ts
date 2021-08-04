import { expect } from 'chai'
import { Solution } from '../src/0509_fibonacci_number/solution';

describe('0509 Fibonacci Number Test', () => {

    interface ITest {
        nums1: number;
        actual: number;
    }

    it('Solution Test', () => {

        let testArr: ITest[] = new Array();

        testArr.push({
            nums1: 2,
            actual: 1
        });

        testArr.push({
            nums1: 3,
            actual: 2
        });

        testArr.push({
            nums1: 4,
            actual: 3
        });

        let solution = new Solution();

        testArr.forEach((val) => {
            expect(solution.fib(val.nums1)).equal(val.actual);
        });
    })
});