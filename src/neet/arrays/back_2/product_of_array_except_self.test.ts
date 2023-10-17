import { expect, test } from "bun:test";

let nums = [1, 2, 3, 4];
let out = [24, 12, 8, 6];

function product_of_execpt_self() {
  let prefix = [];
  prefix[0] = 1;
  let postfix: number[] = [];
  postfix[nums.length - 1] = 1;
  let res = [];
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }
  for (let j = nums.length - 2; j >= 0; j--) {
    postfix[j] = postfix[j + 1] * nums[j + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix[i] * postfix[i];
  }
  return res;
}

test("product_of_execpt_self", () => {
  expect(product_of_execpt_self()).toEqual(out);
});
