import { expect, test } from "bun:test";

let nums = [2, 7, 11, 15],
  target = 9;
let out = [0, 1];

function two_sums() {
  let map = new Map<string, number>();
  for (let i in nums) {
    let toFind = target - nums[i];
    if (map.has(toFind.toString())) {
      return [map.get(toFind.toString()), Number(i)];
    }
    map.set(nums[i].toString(), Number(i));
  }
}

test("two_sums", () => {
  expect(two_sums()).toEqual(out);
});
