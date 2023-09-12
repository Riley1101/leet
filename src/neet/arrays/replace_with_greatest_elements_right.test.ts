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

test("replace_gratest_right", () => {
  expect(replace_gratest_right()).toEqual(out);
});
