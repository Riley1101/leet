import { expect, test } from "bun:test";

let nums = [2, 7, 11, 15],
  target = 9;
let out = [0, 1];

function two_sums(nums: number[], target: number) {
  let s = new Map();
  for (let i = 0; i < nums.length; i++) {
    let tofind = target - nums[i];
    if (s.has(tofind)) {
      return [s.get(tofind), i];
    }
    s.set(nums[i], i);
  }
}

test("two_sums", () => {
  expect(two_sums(nums, target)).toEqual(out);
});
