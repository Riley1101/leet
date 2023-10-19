import { expect, test } from "bun:test";

let prices = [7, 1, 5, 3, 6, 4];
let out = 5;

function buy_sell_stock() {
  let left = 0;
  let right = 1;
  let max = -Infinity;
  while (left < prices.length) {
    if (prices[left] < prices[right]) {
      max = Math.max(max, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

test("buy_sell_stock", () => {
  expect(buy_sell_stock()).toBe(out);
});
