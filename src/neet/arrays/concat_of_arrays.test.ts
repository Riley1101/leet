import { expect, test } from "bun:test";
let nums = [1, 2, 1];

function concat_arrays() {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    nums.push(nums[i]);
  }
  return nums;
}

test("concat_arrays", () => {
  expect(concat_arrays()).toEqual([1, 2, 1, 1, 2, 1]);
});
