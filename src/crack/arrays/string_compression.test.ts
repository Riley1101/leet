import { expect, test } from "bun:test";

function string_compression(a: string, out: string) {
  let res = "";
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count++;
    if (a[i] !== a[i + 1]) {
      res += a[i];
      res += count;
      count = 0;
    }
  }
  if (res.length > a.length) return a;
  return res;
}

test("string_compression", () => {
  // Test case 1: Basic compression
  let input1 = "aabcccccaaa";
  let output1 = "a2b1c5a3";
  expect(string_compression(input1, output1)).toBe(output1);

  // Test case 2: Compression result longer than original string
  let input2 = "abcdefg";
  let output2 = "abcdefg"; // The compressed string is longer than the original
  expect(string_compression(input2, output2)).toBe(input2);

  // Test case 3: Empty string
  let input3 = "";
  let output3 = "";
  expect(string_compression(input3, output3)).toBe(output3);

  // Test case 4: Single character input
  let input4 = "a";
  let output4 = "a"; // Compressed result should be "a1"
  expect(string_compression(input4, output4)).toBe(output4);

  // Test case 5: Multiple characters with no compression needed
  let input5 = "abcde";
  let output5 = "abcde"; // No compression needed
  expect(string_compression(input5, output5)).toBe(output5);

  // Test case 6: Large input with multiple compressions
  let input6 = "aaabbbcccddddeeeee";
  let output6 = "a3b3c3d4e5";
  expect(string_compression(input6, output6)).toBe(output6);
});
