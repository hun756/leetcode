export class Solution {
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let cmb: number[] = (nums1.concat(nums2)).sort((n1, n2) => n1 - n2);

        const mid = Math.floor(cmb.length / 2);

        return cmb.length % 2 != 0
            ? cmb[mid] : (cmb[mid - 1] + cmb[mid]) / 2.0;
    };
}