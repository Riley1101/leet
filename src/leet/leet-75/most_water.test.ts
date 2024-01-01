import { expect, test } from "bun:test";


let bar = [1, 8, 6, 2, 5, 4, 8, 3, 7]

// max = -Inf
// 1 8 6 2 5 4 8 3 7
// l               r  

function most_water(nums: number[]): number {
    let maxA = 0
    let left = 0;
    let right = nums.length - 1
    while (left < right) {
        if (nums[left] < nums[right]) {
            maxA = Math.max((right - left) * nums[left], maxA)
            left++
        }
        else {
            maxA = Math.max((right - left) * nums[right], maxA)
            right--
        }

    }
    return maxA
}

test("Most water", () => {
    expect(most_water(bar)).toEqual(49);
});
