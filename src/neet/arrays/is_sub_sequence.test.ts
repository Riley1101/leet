import { expect, test } from "bun:test";

let s = "abc",
  t = "ahbgdc";

/*
 *  will have to be in order
 *  will set two pointer i for s
 *  will set two pointer j for t
 *  start with i and
 *      then walk up j until you found i (condition is the end of either s or t string)
 *      if not return false
 *  if so move up the i
 *  if(length is equal to length of i ) return true
 *  else return false
 */

function is_sub_sequence(s: string, t: string) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i += 1;
    }
    j += 1;
  }
  if (i === s.length) return true;
  return false;
}

test("is_sub_sequence", () => {
  expect(is_sub_sequence(s, t)).toBe(true);
});
