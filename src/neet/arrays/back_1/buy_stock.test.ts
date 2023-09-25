import { test, expect } from "bun:test";
let p = [7, 1, 5, 3, 6, 4];
let out = 5;

function buy_stock(prices: number[]) {
  let max = 0;
  let left = 0;
  let right = 1;
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

test("buy_stock", () => {
  expect(buy_stock(p)).toEqual(out);
});
