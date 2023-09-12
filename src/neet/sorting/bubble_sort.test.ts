import { expect, test } from "bun:test";

const arr1 = [8, 3, 12, 5, 1, 9];

const arr2 = [3.14, 2.71, 1.618, 0.99, 4.2, 5.55];

const arr3 = [-10, -5, -3, -8, -1, -7];

const arr4 = [42, 3.14, -8, 0, 99, 7.77];

const arr5 = [17, 23, 9, 33, 6, 11];

function bubble_sort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let swapped = false;
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j + 1] > nums[j]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
        swapped = true;
      }
    }
    if (!swapped) {
      return nums;
    }
  }
  return nums;
}

test("bubble_sort", () => {
  expect(bubble_sort(arr1)).toEqual(arr1.sort((a, b) => a - b));
  expect(bubble_sort(arr2)).toEqual(arr2.sort((a, b) => a - b));
  expect(bubble_sort(arr3)).toEqual(arr3.sort((a, b) => a - b));
  expect(bubble_sort(arr4)).toEqual(arr4.sort((a, b) => a - b));
  expect(bubble_sort(arr5)).toEqual(arr5.sort((a, b) => a - b));
});
