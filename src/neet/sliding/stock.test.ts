import { expect, test } from "bun:test";

let prices = [7, 1, 5, 3, 6, 4];
let target = 5;

function stock_option() {
  let left = 0;
  let max = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      max = Math.max(max, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

test("stock_option", () => {
  expect(stock_option()).toBe(target);
});
