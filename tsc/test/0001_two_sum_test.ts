import { expect } from 'chai'
import { Solution } from '../src/0001_two_sum/0001_two_sum';
import { describe } from 'mocha'

describe('0001TwoSumSolutionTest', () => {
    let inputArr: number[] = [2, 7, 11, 15];
    let target: number = 9;
    let actual: number[] = [0, 1];

    let solution = new Solution();
    expect(solution.twoSum(inputArr, target)).to.equal(actual);
});