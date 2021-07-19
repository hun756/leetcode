export class Solution {
    spiralOrder(matrix: number[][]): number[] {
        let result: number[] = new Array();
        let top = 0,
            back = matrix.length - 1,
            left = 0,
            right = matrix[0].length - 1,
            dir = 0;
        while (top <= back && left <= right) {

            switch (dir) {
                case 0: {
                    for (let i = left; i <= right; i++)
                        result.push(matrix[top][i]);
                    ++top;
                    break;
                }

                case 1: {
                    for (let i = top; i <= back; i++)
                        result.push(matrix[i][right]);
                    --right;
                    break;
                }

                case 2: {
                    for (let i = right; i >= left; i--)
                        result.push(matrix[back][i]);
                    --back;
                    break;
                }

                case 3: {
                    for (let i = back; i >= top; i--)
                        result.push(matrix[i][left]);
                    ++left;
                    break;
                }
            }

            ++dir;
            dir %= 4;
        }
        return result;
    };
}