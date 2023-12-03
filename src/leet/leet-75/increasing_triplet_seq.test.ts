import { test, expect } from "bun:test";



let nums = [20, 100, 10, 12, 5, 13]

let out = true
function increasing_triplet_seq(nums: number[]): boolean {
    let nums_i = Infinity
    let nums_j = Infinity
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        if (cur <= nums_i) {
            nums_i = cur
        }
        else if (cur <= nums_j) {
            nums_j = cur
        }
        else {
            return true
        }
    }
    return false
}

test("greatest_common_diviser", () => {
    expect(increasing_triplet_seq(nums)).toEqual(out);
});
