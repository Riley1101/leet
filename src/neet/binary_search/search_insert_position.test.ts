import { test, expect } from "bun:test";
let nums = [1, 2, 5, 7],
  target = 3;

function search_insert() {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

test("binary_search", () => {
  expect(search_insert()).toBe(2);
});
