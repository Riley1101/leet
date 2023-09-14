import { expect, test } from "bun:test";

let nums = [1, 2, 3, 1, 2, 3],
  k = 2;

/**
 *  find duplicates chech if i - j <= k
 *
 */
function contains_duplicates() {
  let set = new Set();
  let l = 0;
  for (let r in nums) {
    if (nums[r] - nums[l] > k) {
      set.delete(nums[l]);
      l++;
    }
    if (set.has(r)) {
      return true;
    }
    set.add(r);
  }
  return false;
}

test.skip("contains_duplicates_2", () => {
  expect(contains_duplicates()).toBe(false);
});
