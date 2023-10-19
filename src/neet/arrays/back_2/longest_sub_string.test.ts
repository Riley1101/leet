import { test, expect } from "bun:test";
let s = "abcabcbb";
let out = 3;

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
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}

test("longest_sub_string", () => {
  expect(longest_sub_string()).toBe(out);
});
