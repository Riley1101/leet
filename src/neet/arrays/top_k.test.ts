import { expect, test } from "bun:test";
let nums = [1, 1, 1, 2, 2, 3],
  k = 2;

function top_k() {

}

test("top_k", () => {
  expect(top_k()).toEqual([1, 2, 1, 1, 2, 1]);
});
