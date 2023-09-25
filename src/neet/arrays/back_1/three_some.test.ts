import { expect, test } from "bun:test";

let items = [-1, 0, 1, 2, -1, -4];
let out = [
  [-1, -1, 2],
  [-1, 0, 1],
];

function three_some(nums: number[]) {
  nums = nums.sort((a, b) => a - b);
  let res: number[][] = [];
  nums.forEach((first, firstIdx) => {
    // check duplicates for the first val
    if (firstIdx > 0 && first == nums[firstIdx - 1]) return;
    let second = firstIdx + 1;
    let third = nums.length - 1;
    while (second < third) {
      let total = first + nums[second] + nums[third];
      if (total > 0) {
        third--;
      } else if (total < 0) {
        second++;
      } else {
        res.push([first, nums[second], nums[third]]);
        second++;
        while (nums[second] == nums[second - 1] && second < third) {
          second++;
        }
      }
    }
  });
  return res;
}

test("three_some", () => {
  let res = three_some(items);
  expect(res).toEqual(out);
});
