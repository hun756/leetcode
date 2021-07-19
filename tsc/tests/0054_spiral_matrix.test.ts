import { expect } from 'chai'
import { Solution } from '../src/0054_spiral_matrix/solution';

describe('0054SpiralMAtrixSolutionTest', () => {
    it('firstTest', () => {
        let matrix: number[][] = [[1,2,3],[4,5,6],[7,8,9]];
        let actual: number[] = [1,2,3,6,9,8,7,4,5];


        let solution = new Solution();
        expect(solution.spiralOrder(matrix)).deep.equal(actual);
    })


    it('SecondTest', () => {
        let matrix: number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
        let actual: number[] = [1,2,3,4,8,12,11,10,9,5,6,7]


        let solution = new Solution();
        expect(solution.spiralOrder(matrix)).deep.equal(actual);
    })

});