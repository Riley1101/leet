import { expect, test } from "bun:test";

let val = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let out = 49;

function most_water(nums: number[]) {
  let left = 0;
  let right = nums.length - 1;
  let maxArea = -Infinity;
  while (left < right) {
    let area = (right - left) * Math.min(nums[left], nums[right]);
    maxArea = Math.max(area, maxArea);
    if (nums[left] < nums[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

test("most_water", () => {
  expect(most_water(val)).toBe(out);
});
