import { test, expect } from "bun:test";

function isRotation(str1: string, str2: string) {
  if (str1.length == 0 && str2.length == 0) return true;
  let len = str1.length;
  if (len === str2.length && len !== 0) {
    let s1s1 = str1 + str1;
    console.log(s1s1, str2);
    return isSubString(s1s1, str2);
  }
  return false;
}

function isSubString(str1: string, str2: string) {
  return str1.includes(str2);
}

test("isRotl - Same strings", () => {
  let str1 = "abcdefg";
  let str2 = "abcdefg";
  let res = isRotation(str1, str2);
  expect(res).toBe(true);
});

test("isRotl - Rotation by one character", () => {
  let str1 = "hello";
  let str2 = "ohell";
  let res = isRotation(str1, str2);
  expect(res).toBe(true);
});

test("isRotl - Rotation by multiple characters", () => {
  let str1 = "programming";
  let str2 = "mingprogram";
  let res = isRotation(str1, str2);
  expect(res).toBe(true);
});

test("isRotl - Different lengths, not a rotation", () => {
  let str1 = "apple";
  let str2 = "pineapple";
  let res = isRotation(str1, str2);
  expect(res).toBe(false);
});

test("isRotl - Empty strings", () => {
  let str1 = "";
  let str2 = "";
  let res = isRotation(str1, str2);
  expect(res).toBe(true);
});

test("isRotl - One empty string", () => {
  let str1 = "hello";
  let str2 = "";
  let res = isRotation(str1, str2);
  expect(res).toBe(false);
});

test("isRotl - Different characters", () => {
  let str1 = "abc";
  let str2 = "xyz";
  let res = isRotation(str1, str2);
  expect(res).toBe(false);
});
