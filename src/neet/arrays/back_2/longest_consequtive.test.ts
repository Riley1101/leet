import { expect, test } from "bun:test";

let nums = [100, 4, 200, 1, 3, 2];
let out = 4;
function longest_conseq() {
  let s = new Set(nums);
  let length = 0;
  let res = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (!s.has(nums[i] - 1)) {
      length = 0;
      while (s.has(nums[i] + length)) {
        length++;
      }
      res = Math.max(res, length);
    }
  }
  return res;
}

test("dups", () => {
  expect(longest_conseq()).toBe(out);
});
