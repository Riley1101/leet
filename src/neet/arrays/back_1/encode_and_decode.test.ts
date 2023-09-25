import { expect, test } from "bun:test";

let strs = ["lint", "code", "love", "you"];

function encode(str: string[]) {
  let res = "";
  for (let i of str) {
    res += i + ":;";
  }
  return res;
}
function decode(str: string) {
  let res = [];
  let pointer = 0;
  let word = "";
  while (pointer < str.length) {
    if (str[pointer] === ":" && str[pointer + 1] == ";") {
      pointer += 2;
      res.push(word);
      word = "";
    }
    word += str[pointer];
    pointer++;
  }
  return res;
}

function encode_decode(strs: string[]) {
  return decode(encode(strs));
}

test("encode_decode", () => {
  expect(encode_decode(strs)).toEqual(strs);
});

test("encode", () => {
  const encoded = encode(strs);
  expect(encoded).toEqual("lint:;code:;love:;you:;");
});

test("decode", () => {
  const decoded = decode("lint:;code:;love:;you:;");
  expect(decoded).toEqual(strs);
});

test("encode_decode with empty array", () => {
  const emptyArray: string[] = [];
  expect(encode_decode(emptyArray)).toEqual(emptyArray);
});

test("encode_decode with single element array", () => {
  const singleElementArray = ["hello"];
  expect(encode_decode(singleElementArray)).toEqual(singleElementArray);
});

test("encode_decode with special characters", () => {
  const specialCharsArray = ["!@#$%^&*()_+=-"];
  expect(encode_decode(specialCharsArray)).toEqual(specialCharsArray);
});
