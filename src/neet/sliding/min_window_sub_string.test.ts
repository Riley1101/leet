import { expect, test } from "bun:test";

let s = "ADOBECODEBANC",
  t = "ABC";
/**
 * if t=" " return ""
 * add all the elements from t to countT map
 * declare have starting from zero
 * declare need which will be the length of keys in countT map
 * start the right pointer from zero
 * add all the elements from s to wid map
 * if cur in countT & win[cur] == countT[cur]
 */
function min_window_substring(s: string) {
  if (t == " ") return " ";
  let countT: Record<string, number> = {},
    wid: Record<string, number> = {};
  for (let i of t) {
    countT[i] = countT[i] ? (countT[i] += 1) : 1;
  }
  let res = [-1, -1];
  let resLength = -Infinity;
  let have = 0,
    need = Object.keys(countT).length;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let cur = s[right];
    wid[cur] = wid[cur] ? (wid[cur] += 1) : 1;
    if (cur in countT && wid[cur] === countT[cur]) {
      have += 1;
    }
    while (have === need) {
      if (right - left + 1 < resLength) {
        res = [left, right];
        resLength = right - left + 1;
      }
      wid[s[left]] -= 1;
      if (s[left] in countT && wid[s[left]] < countT[s[left]]) {
        have -= 1;
      }
      left += 1;
    }
  }
  console.log(res);
  let [l, r] = res;
  return s.slice(l, r);
}

test.skip("min_window_substring", () => {
  console.log(min_window_substring(s));
  expect(min_window_substring(s)).toBe(t);
});
