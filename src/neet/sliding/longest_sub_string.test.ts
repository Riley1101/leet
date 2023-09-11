import { expect, test } from "bun:test";

let s = "abcabcbb";
let target = 3;

function longest_sub_string() {
  let left = 0;
  let right = 0;
  let set = new Set();
  let max = 0;
  while (right < s.length) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    max = Math.max(max, right - left + 1);
    set.add(s[right]);
    right++;
  }
  return max;
}

test("longest_sub_string", () => {
  expect(longest_sub_string()).toBe(target);
});
