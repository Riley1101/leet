import { expect, test } from "bun:test";

/**
 * @description to check if string is permutation and a permutation_palindrone
 * t a c o c a t
 * ------------
 */
function permutation_palindrone(s: string) {
  let map: Record<string, number> = {};
  for (let i of s) {
    map[i] = i in map ? (map[i] += 1) : 1;
  }
  let hasOne = false;
  for (let k in map) {
    if (map[k] % 2 === 1) {
      if (hasOne) {
        return false;
      }
      hasOne = true;
    }
  }
  return true;
}

function permutation_palindrone_2(s: string) {
  let map: Record<string, number> = {};
  let countOdd = 0;
  for (let i of s) {
    map[i] = i in map ? (map[i] += 1) : 1;
    if (map[i] % 2 === 1) {
      countOdd++;
    } else {
      countOdd--;
    }
  }
  return countOdd <= 1;
}

test("permutation_palindrone", () => {
  // Test Case 1: A palindrome permutation (even length)
  let s1 = "tacocat";
  expect(permutation_palindrone_2(s1)).toBe(true);

  // Test Case 2: A palindrome permutation (odd length)
  let s2 = "racecar";
  expect(permutation_palindrone_2(s2)).toBe(true);

  // Test Case 3: Not a palindrome permutation
  let s3 = "hello";
  expect(permutation_palindrone_2(s3)).toBe(false);

  // Test Case 4: A single character (considered a palindrome)
  let s4 = "a";
  expect(permutation_palindrone_2(s4)).toBe(true);

  // Test Case 5: Empty string (considered a palindrome)
  let s5 = "";
  expect(permutation_palindrone_2(s5)).toBe(true);
});
