export class Solution {
    twoSum(nums: number[], target: number): number[] {
        for (let i: number = 0; (i < nums.length); i++) {
            for (let j: number = (i + 1); (j < nums.length); j++) {
                if (((nums[i] + nums[j]) == target)) {
                    return new Array(i, j);
                }
            }
        }

        throw new Error("No solution");
    };
}