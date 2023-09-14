import { expect, test } from "bun:test";

let s = "pwwkew";
let out = 3;

/**
 * a b c a b c b b
 *           i
 *               j
 */
function longest_consequtives() {
  let left = 0;
  let set = new Set();
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }
    max = Math.max(max, right - left + 1);
    set.add(s[right]);
  }
  return max;
}

test("longest_consequtives", () => {
  expect(longest_consequtives()).toBe(out);
});
