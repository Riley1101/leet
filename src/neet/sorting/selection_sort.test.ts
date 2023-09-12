import { expect, test } from "bun:test";

const arr1 = [8, 3, 12, 5, 1, 9];

const arr2 = [3.14, 2.71, 1.618, 0.99, 4.2, 5.55];

const arr3 = [-10, -5, -3, -8, -1, -7];

const arr4 = [42, 3.14, -8, 0, 99, 7.77];

const arr5 = [17, 23, 9, 33, 6, 11];

function selection_sort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        min = j;
      }
    }
    if (i !== min) {
      [nums[min], nums[i]] = [nums[i], nums[min]];
    }
  }
  return nums;
}

test("selection_sort", () => {
  expect(selection_sort(arr1)).toEqual(arr1.sort((a, b) => a - b));
  expect(selection_sort(arr2)).toEqual(arr2.sort((a, b) => a - b));
  expect(selection_sort(arr3)).toEqual(arr3.sort((a, b) => a - b));
  expect(selection_sort(arr4)).toEqual(arr4.sort((a, b) => a - b));
  expect(selection_sort(arr5)).toEqual(arr5.sort((a, b) => a - b));
});
