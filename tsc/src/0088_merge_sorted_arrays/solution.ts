export class Solution {
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let temp1: number[] = new Array();
        let temp2: number[] = new Array();

        temp1 = this._assign(nums1, m)
        temp2 = this._assign(nums2, n)


        this.clearNum1(nums1);
        this._fill(nums1, this._merge(temp1, temp2));
    }

    private _merge(nums1: number[], nums2: number[]): number[] {
        let result = [...nums1, ...nums2];

        return result.sort((n1, n2) => n1 - n2);
    }

    private _assign(tmp: number[], n: number): number[] {
        let arr1: number[] = new Array();

        for (let i: number = 0; i < n; ++i) {
            arr1.push(tmp[i]);
        }

        return arr1;
    }

    private clearNum1(num1: number[]) {
        while (num1.length > 0) {
            num1.pop();
        }
    }

    private _fill(num1: number[], num2: number[]) {
        for (let i = 0; i < num2.length; ++i) {
            num1.push(num2[i]);
        }
    }
}