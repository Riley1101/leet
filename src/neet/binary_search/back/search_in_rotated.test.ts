import { test, expect } from "bun:test";

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
let out = 4;

function search_rotated() {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    // in left
    if (nums[mid] >= nums[left]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // right
    else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
}

test("search_rotated", () => {
  let res = search_rotated();
  expect(res).toBe(0);
});
