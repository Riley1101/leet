import { expect, test } from "bun:test";

let s = "AABABBA",
  k = 1;

function longest_repeating_char_replace() {
  let left = 0;
  let map: Record<string, number> = {};
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    if (s[right] in map) {
      map[s[right]] += 1;
    } else {
      map[s[right]] = 1;
    }

    let most = Math.max(...Object.values(map));
    while (right - left + 1 - most > k) {
      map[s[left]] -= 1;
      if (map[s[left]] === 0) {
        delete map[s[left]];
      }
      left += 1;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}

test("longest_repeating_char_replace", () => {
  expect(longest_repeating_char_replace()).toBe(4);
});
