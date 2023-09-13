import { expect, test } from "bun:test";

let nums = [17, 18, 5, 4, 6, 1];
let out = [18, 6, 6, 6, 1, -1];

function replace_gratest_right() {
  let max = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    let newMax = Math.max(max, nums[i]);
    nums[i] = max;
    max = newMax;
  }
  return nums;
}

function replace_greates_right_2() {
  let max = -1;
  for (let j = nums.length - 1; j >= 0; j--) {
    let newMax = Math.max(max, nums[j]);
    nums[j] = max;
    max = newMax;
  }
  return nums;
}

test("replace_gratest_right", () => {
  expect(replace_greates_right_2()).toEqual(out);
});
