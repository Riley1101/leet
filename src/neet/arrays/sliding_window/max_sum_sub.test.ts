import { expect, test } from "bun:test";

let nums = [3, 5, 2, 1, 7];
let k = 2;

function max_sum(nums: number[], k: number) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let max = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (right - left + 1 > k) {
      console.log(left, right);
      sum -= nums[left];
      left += 1;
    }
    max = Math.max(max, sum);
    right += 1;
  }
  return sum;
}

function max_sum_2(nums: number[], k: number) {
  let left = 0;
  let max = 0;
  let sum = 0;
  let right = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (right - left + 1 > k) {
      sum -= nums[left];
      left++;
    }
    max = Math.max(sum, max);
    right++;
  }
  return max;
}

test("max_sum", () => {
  expect(max_sum_2(nums, k)).toEqual(8);
});
