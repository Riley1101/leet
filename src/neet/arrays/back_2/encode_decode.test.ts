import { expect, test } from "bun:test";
import exp from "constants";

let str = ["we", "say", ":", "yes"];
let out = ["lint", "code", "love", "you"];

function encode(str: string[]): string {
  let out = "";
  for (let i in str) {
    out += str[i];
    out += ":;";
  }
  return out;
}

function decode(str: string): string[] {
  let res: string[] = [];
  let pointer = 0;
  let tmp = "";
  while (pointer < str.length) {
    if (str[pointer] === ":" && str[pointer + 1] === ";") {
      res.push(tmp);
      tmp = "";
      pointer += 2;
    }
    tmp += str[pointer];
    pointer++;
  }
  return res;
}

test("encode_decode", () => {
  let encoded = encode(str);
  console.log(encoded);

  expect(decode(encoded)).toEqual(str);
});
