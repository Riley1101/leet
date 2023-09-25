import { expect, test } from "bun:test";

let s = "race a car";

function valid_palindrone(s: string) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let l = 0;
  let r = s.length - 1;
  console.log(s);
  // remove invalid nums
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

test("valid_palindrone", () => {
  expect(valid_palindrone(s)).toBe(false);
});
