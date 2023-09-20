import { test, expect } from "bun:test";
let ins = ["2", "1", "+", "3", "*"];
let out = 9;

function reverse_polish(tokens: string[]) {
  let s = [];
  for (let i = 0; i < tokens.length; i++) {
    let cur = tokens[i];
  }
}

test("reverse_polish", () => {
  expect(reverse_polish(ins)).toEqual(out);
});
