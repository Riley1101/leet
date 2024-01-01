
import { expect, test } from "bun:test";


let str = [1, 0, 2, 0, 12, 9]
let out = [1, 2, 12, 9, 0, 0]

// 1,0,2,0,12,9
//   l 
//       r

function move_zeros(nums: number[]): number[] {
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) { 
            let tmp = nums[left] as number
            nums[left] = nums[right]
            nums[right] = tmp
            left++;
        }
    }
    return nums
}

test("move zeros", () => {
    expect(move_zeros(str)).toEqual(out);
});
