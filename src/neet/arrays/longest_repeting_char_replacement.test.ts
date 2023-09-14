import { expect, test } from "bun:test";

let s = "AABABBA",
  k = 1;
let out = 4;

/**
 * A B A B
 * i
 * j
 * put all items to a hashmap
 * calculate the most item in map
 * start moving from j
 */
function longest_repeting_character_replacement() {
  let map = new Map<string, number>();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      map.set(s[right], (map.get(s[right]) as number) + 1);
    } else {
      map.set(s[right], 1);
    }
    let most = Math.max(...map.values());

    while (right - left + 1 - most > k) {
      map.set(s[left], (map.get(s[left]) as number) - 1);
      if (map.get(s[right]) == 0) {
        map.delete(s[right]);
      }
      left += 1;
    }
    max = Math.max(right - left + 1, max);
  }
  return max;
}

test("longest_consequtives", () => {
  expect(longest_repeting_character_replacement()).toBe(out);
});
