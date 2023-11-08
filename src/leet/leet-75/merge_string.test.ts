import { expect, test } from "bun:test";

let str1 = "abc12",
  str2 = "pqr";

/*
 * A B C
 *
 * Q P R
 *
 * result = ""
 * A B C A
 */

function mergeAlternately(str1: string, str2: string): string {
  let result = "";
  let first = 0;
  let second = 0;
  while (first < str1.length && second < str2.length) {
    result = result + str1[first];
    first++;
    result = result + str2[second];
    second++;
  }
  if (str1.length > first) {
    result += str1.slice(first, str1.length);
  }
  if (str2.length > second) {
    result += str1.slice(second, str2.length);
  }
  return result;
}

function merge_2() {
  let result = "";
  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (i < str1.length) result += str1[i];
    if (i < str2.length) result += str2[i];
  }
  return result;
}

test("mergeAlternately", () => {
  expect(merge_2()).toBe("apbqcr12");
});
