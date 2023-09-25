import { expect, test } from "bun:test";

let nums = [1, 2, 3, 1];
function contain_duplicates(nums: number[]) {
  let set = new Set();
  for (let i of nums) {
    if (set.has(i)) {
      return false;
    }
  }
  return true;
}

test("contain_duplicates", () => {
  expect(contain_duplicates(nums)).toBe(true);
});
