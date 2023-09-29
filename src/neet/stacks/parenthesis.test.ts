
import { expect, test } from "bun:test";
let s = "()";

function valie_parentheses(s: string) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (cur == "(" || cur == "[" || cur == "{") {
      stack.push(cur);
    } else {
      let top = stack[stack.length - 1];
      if (top == "(" && s[i] == ")") {
        stack.pop();
      } else if (top == "{" && s[i] == "}") {
        stack.pop();
      } else if (top == "[" && s[i] == "]") {
        stack.pop();
      } else return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
}

test("valie_parentheses", () => {
  expect(valie_parentheses(s)).toBe(true);
});
