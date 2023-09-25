import { expect, test } from "bun:test";

let nums = [1, 2, 3, 4];
let out = [24, 12, 8, 6];

function product_except_self(nums: number[]) {
  let prefix: number[] = [1];
  let postfix: number[] = [];
  let n = nums.length;
  prefix[0] = 1;
  postfix[n - 1] = 1;
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }
  for (let j = n - 2; j >= 0; j--) {
    postfix[j] = postfix[j + 1] * nums[j + 1];
  }
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = prefix[i] * postfix[i];
  }
  return res;
}

test("product_except_self", () => {
  expect(product_except_self(nums)).toEqual(out);
});
