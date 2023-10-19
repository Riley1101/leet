import { expect, test } from "bun:test";
import { resolveTypeReferenceDirective } from "typescript";

let val = [-1, 0, 1, 2, -1, -4];
let out = [
  [-1, -1, 2],
  [-1, 0, 1],
];
/**
 * @description
 *   nums[i] + nums[j] + nums[k] == 0 where i != j != k
 */
function threesome(nums: number[]) {
  let result: number[][] = [];
  nums = nums.sort((b, a) => b - a);
  nums.forEach((a, idx) => {
    if (idx > 0 && nums[idx - 1] === a) return;
    let b = idx + 1;
    let c = nums.length - 1;
    while (b < c) {
      let sum = a + nums[b] + nums[c];
      if (sum > 0) {
        c--;
      } else if (sum < 0) {
        b++;
      } else {
        result.push([a, nums[b], nums[c]]);
        b++;
        while (nums[b] === nums[b - 1] && b < c) {
          b++;
        }
      }
    }
  });
  console.log(result);
  return result;
}

test("threesome", () => {
  expect(threesome(val)).toEqual(out);
});
