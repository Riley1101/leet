import { test, expect } from "bun:test";

let nums = [2, 1];

function min_rotatedSearch() {
  if (nums.length <= 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;
  while (left <= right) {
    if (nums[left] < nums[right]) return nums[left];
    let mid = Math.floor((left + right) / 2);
    min = Math.min(min, nums[mid]);
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return min;
}

test("min_rotatedSearch", () => {
  let res = min_rotatedSearch();
  expect(res).toBe(1);
});
