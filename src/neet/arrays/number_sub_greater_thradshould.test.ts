import { expect, test } from "bun:test";

let arr = [2, 2, 2, 2, 5, 5, 5, 8],
  k = 3,
  threshold = 4;
let out = 3;

/**
 * 2 2 2 2 2 2 5 6 7
 * --i
 * ------j
 * check if the conditions are met
 * if so update the max
 * else add i and reset j at i
 */
function sub_arr_greater_tha() {
  let left = 0;
  let max = 0;
  let right = 0;
  while (left < arr.length) {
    let avg = 0;
    for (let j = 1; j < k + 1; j++) {
      avg += arr[right];
      right++;
    }
    avg = avg / k;
    if (avg >= threshold) {
      max = max + 1;
    }
    left++;
    right = left;
  }
  return max;
}

test("longest_consequtives", () => {
  expect(sub_arr_greater_tha()).toBe(out);
});
