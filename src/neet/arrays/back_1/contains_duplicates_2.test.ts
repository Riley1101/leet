import { expect, test } from "bun:test";

let nums = [1, 2, 3, 1],
  k = 3;

function contains_duplicates_2(nums: number[], k: number) {}

test("contains_duplicates_2", () => {
  let res = contains_duplicates_2(nums, k);
  expect(res).toBe(true);
});
