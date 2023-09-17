import { expect, test } from "bun:test";

/**
 * @description to replace spaces with %20
 * res -""
 * eg - Hello world
 *       -----------
 */
function urlify(s: string) {
  let t = "";
  let pointer = 0;
  while (s[pointer] === " ") {
    pointer++;
  }
  while (pointer < s.length) {
    if (s[pointer] !== " ") {
      t += s[pointer];
      pointer++;
    } else {
      while (s[pointer] === " ") {
        let lookup = pointer;
        while (lookup < s.length) {
          lookup++;
          if (s[lookup] !== " ") {
            pointer = lookup;
            break;
          }
        }
        if (lookup === s.length) {
          return t;
        }
      }

      t += "%20";
    }
  }
  return t;
}

test("urlify", () => {
  let s1 = "Hello world ";
  expect(urlify(s1)).toBe("Hello%20world");

  let s2 = "This is a test";
  expect(urlify(s2)).toBe("This%20is%20a%20test");

  let s3 = "   Spaces   ";
  expect(urlify(s3)).toBe("Spaces");

  let s4 = "NoSpacesHere";
  expect(urlify(s4)).toBe("NoSpacesHere");

  let s5 = " Special Characters #$@ ";
  expect(urlify(s5)).toBe("Special%20Characters%20#$@");
});
