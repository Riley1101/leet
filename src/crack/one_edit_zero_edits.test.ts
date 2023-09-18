import { test, expect } from "bun:test";

function one_edits_two_edits() {}

test.skip("One or One Edit Replace", () => {
  expect(one_edits_two_edits()).toBe(true);
});
