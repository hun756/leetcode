import { expect } from 'chai'
import Solution from '../src/0001_two_sum/solution';

describe('0001TwoSumSolutionTest', () => {
    it('firstTest', () => {
        let inputArr: number[] = [2, 7, 11, 15];
        let target: number = 9;
        let actual: number[] = [0, 1];

        let solution = new Solution();
        expect(solution.twoSum(inputArr, target)).deep.equal(actual);
    })


    it('SecondTest', () => {
        let inputArr: number[] = [3, 2, 4];
        let target: number = 6;
        let actual: number[] = [1, 2];

        let solution = new Solution();
        expect(solution.twoSum(inputArr, target)).deep.equal(actual);
    })


    it('ThirdTest', () => {
        let inputArr: number[] = [3, 3];
        let target: number = 6;
        let actual: number[] = [0, 1];

        let solution = new Solution();
        expect(solution.twoSum(inputArr, target)).deep.equal(actual);
    })
});