import { test, expect } from "bun:test";
let s = "AABA",
  k = 1;
let out = 4;

function longest_repeating_char_rep(s: string, k: number) {
  let map: Record<string, number> = {};
  let res = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    map[s[right]] = s[right] in map ? map[s[right]] + 1 : 1;
    let most = Math.max(...Object.values(map));
    while (right - left + 1 - most > k) {
      map[s[left]] = map[s[left]] - 1;
      if (map[s[right]] === 0) {
        delete map[s[right]];
      }
      left += 1;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}

test("longest_repeating_char_rep", () => {
  expect(longest_repeating_char_rep(s, k)).toEqual(out);
});
