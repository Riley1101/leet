import { test, expect } from "bun:test";

let str = "abcabcbb";
let out = 3;

function longest_sub_string(s: string) {
  let set = new Set();
  let max = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    max = Math.max(max, right - left + 1);
    set.add(s[right]);
  }
  return max;
}

test("longest_sub_string", () => {
  expect(longest_sub_string(str)).toEqual(out);
});
