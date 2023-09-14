import { expect, test } from "bun:test";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 4;

function binary_search() {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

test("binary_search", () => {
  expect(binary_search()).toBe(3);
});
