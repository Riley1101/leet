import { test, expect } from "bun:test";
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let out = 49;

function most_water(height: number[]) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(area, max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

test("most_water", () => {
  expect(most_water(height)).toEqual(out);
});
