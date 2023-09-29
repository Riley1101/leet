import { expect, test } from "bun:test";
let s = "()";

function valie_parentheses(s: string) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } 
    else{
        if (c === "(" && stack[stack.length - 1] === ")") {
            stack.pop();
        } else if (c === "{" && stack[stack.length - 1] === "}") {
            stack.pop();
        } else if (c === "[" && stack[stack.length - 1] === "]") {
            stack.pop();
        } else {
            return false;
        }
    }
  }
  if (stack.length > 0) return false;
  return true;
}

test("valie_parentheses", () => {
  expect(valie_parentheses(s)).toBe(true);
});
