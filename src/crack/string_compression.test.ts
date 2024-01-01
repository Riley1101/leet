import { expect, test } from "bun:test";


/**
 *  start walking the string check if current item and previous match
 *  prev = ""
 *  count = 0;
 * aabbbccc
 * -----
 */
function string_compression() {
  let s = "aabcccccaaa";
  let res = "";
  let count = 0;
  let pointer = 0;
  while (pointer < s.length) {
    let next = pointer + 1;
    if (next < s.length && s[pointer] == s[next]) {
      count++;

      console.log(count);
    } else {
      count = 0;
    }

    pointer++;
  }
  return res;
}

test("string_compression", () => {
  expect(string_compression()).toBe("a2b1c5a3");
});
