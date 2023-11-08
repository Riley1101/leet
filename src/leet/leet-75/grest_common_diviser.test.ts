import { test, expect } from "bun:test";

let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX",
  str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

function greatest_common_diviser(str1: string, str2: string): string {
  if (str2.length > str1.length) {
    return greatest_common_diviser(str2, str1);
  }
  if (str2 === str1) {
    return str1;
  }
  if (str1.startsWith(str2)) {
    return greatest_common_diviser(str1.substring(str2.length), str2);
  }
  return "";
}

test("greatest_common_diviser", () => {
  expect(greatest_common_diviser(str1, str2)).toBe("TAUXX");
});
