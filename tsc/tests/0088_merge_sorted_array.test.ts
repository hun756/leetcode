import { expect } from 'chai'
import { Solution } from '../src/0088_merge_sorted_arrays/solution';

describe('0088MergeSortedArraysTest', () => {

    interface ITest {
        nums1: number[];
        m: number;
        nums2: number[];
        n: number;
        actual: number[];
    }

    it('Solution Test', () => {

        let testArr: ITest[] = new Array();

        testArr.push({
            nums1: [1, 2, 3, 0, 0, 0],
            m: 3,
            nums2: [2, 5, 6],
            n: 3,
            actual: [1, 2, 2, 3, 5, 6]
        });


        testArr.push({
            nums1: [1],
            m: 1,
            nums2: [],
            n: 0,
            actual: [1]
        });


        testArr.push({
            nums1: [],
            m: 0,
            nums2: [1],
            n: 1,
            actual: [1]
        });


        let solution = new Solution();

        testArr.forEach((val) => {
            solution.merge(val.nums1, val.m, val.nums2, val.n);

            expect(val.nums1).deep.equal(val.actual);
        });
    })
});