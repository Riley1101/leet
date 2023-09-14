import { expect, test } from "bun:test";

const nums = [2, 1];

function find_minimal_rotated_sorted() {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];
  while (left <= right) {
    if (nums[left] < nums[right]) {
      // array is already sorted
      res = Math.min(nums[left], res);
      return res;
    } else {
      let mid = Math.floor((left + right) / 2);
      res = Math.min(nums[mid], res);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return res;
}

function find_minimal_rotated_sorted_2() {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];
  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(nums[left], res);
    } else {
      let mid = Math.floor((left + right) / 2);
      res = Math.min(nums[mid], res);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return res;
}

test("find_minimal_rotated_sorted", () => {
  expect(find_minimal_rotated_sorted_2()).toBe(1);
});
