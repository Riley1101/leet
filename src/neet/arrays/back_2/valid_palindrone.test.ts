import { expect, test } from "bun:test";
let s = "A man, a plan, a canal: Panama";
function valid_palindrone() {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

test("valid_palindrone", () => {
  expect(valid_palindrone()).toBe(true);
});
