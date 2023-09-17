import { expect, test } from "bun:test";

let s = "a";
let out = 1;

function replace_gratest_right() {
  let max = 0;
  let right = s.length - 1;
  while (s[right] == " ") {
    right -= 1;
  }

  while (s[right] !== " " && right >=0) {
    if (s[right] == " ") {
      return max;
    }
    max += 1;
    right -= 1;
  }

  return max;
}

test("replace_gratest_right", () => {
  expect(replace_gratest_right()).toEqual(out);
});
