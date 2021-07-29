import { Solution } from '../src/0004_median_of_two_sorted_array/solution';
import { expect } from 'chai'

describe('0004 Median of Two Sorted Array Test', () => {

    interface ITest {
        input1: number[];
        input2: number[];
        actual: number;
    }

    it('Example Cases', () => {

        let testArr: ITest[] = new Array({
            input1: [1, 3],
            input2: [2],
            actual: 2.00000,
        }, {
            input1: [1, 2],
            input2: [3, 4],
            actual: 2.50000,
        }, {
            input1: [0, 0],
            input2: [0, 0],
            actual: 0.00000,
        }, {
            input1: [],
            input2: [1],
            actual: 1.00000,
        }, {
            input1: [2],
            input2: [],
            actual: 2.00000,
        });

        let solution = new Solution();

        testArr.forEach((val) => {
            expect(solution.findMedianSortedArrays(val.input1, val.input2)).to.equal(val.actual);
        });
    })
});