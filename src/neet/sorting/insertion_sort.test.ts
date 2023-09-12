import { expect, test } from "bun:test";

const arr1 = [8, 3, 12, 5, 1, 9];

const arr2 = [3.14, 2.71, 1.618, 0.99, 4.2, 5.55];

const arr3 = [-10, -5, -3, -8, -1, -7];

const arr4 = [42, 3.14, -8, 0, 99, 7.77];

const arr5 = [17, 23, 9, 33, 6, 11];

function insertion_sort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let j = i - 1;
    let cur = nums[j];
    while (nums[j] < nums[i] && j > -1) {
      nums[j] = nums[j + 1];
      j = j - 1;
    }
    nums[j + 1] = cur;
  }
  return nums;
}

test("insertion_sort", () => {
  expect(insertion_sort(arr1)).toEqual(arr1.sort());
  expect(insertion_sort(arr2)).toEqual(arr2.sort());
  expect(insertion_sort(arr3)).toEqual(arr3.sort());
  expect(insertion_sort(arr4)).toEqual(arr4.sort());
  expect(insertion_sort(arr5)).toEqual(arr5.sort());
});
