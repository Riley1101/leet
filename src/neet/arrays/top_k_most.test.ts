import { expect, test } from "bun:test";

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
let out = [1, 2];

function top_k(nums: number[], k: number) {
  let map: Record<string, number> = {};
  let res: number[] = [];
  for (let i of nums) {
    map[i] = i in map ? map[i] + 1 : 1;
  }
  let count = Object.entries(map).sort((a, b) => {
    return b[1] - a[1];
  });
  for (let i = 0; i < k; i++) {
    res.push(Number(count[i][0]));
  }
  return res;
}

test("tok_k", () => {
  expect(top_k(nums, k)).toEqual(out);
});
