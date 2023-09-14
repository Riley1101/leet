import { expect, test } from "bun:test";

const arr1 = [8, 3, 12, 5, 1, 9];
const arr2 = [3.14, 2.71, 1.618, 0.99, 4.2, 5.55];
const arr3 = [-10, -5, -3, -8, -1, -7];
const arr4 = [42, 3.14, -8, 0, 99, 7.77];
const arr5 = [17, 23, 9, 33, 6, 11];

function partition(arr: number[], low: number, high: number): number {
  let pivot = arr[high];
  let idx = low - 1;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      idx++;
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;
  return idx;
}

/**
 * what is quick sort?
 * find pivotIndx first
 * qs(nums,low,pivotIndx - 1)
 * qs(nums,pivotIndx,,high)
 */
function qs(nums: number[], low: number, high: number) {
  if (low >= high) {
    return nums;
  }
  let pivotIndx = partition(nums, low, high);
  qs(nums, low, pivotIndx - 1);
  qs(nums, pivotIndx, high);
  return nums;
}

function quick_sort(nums: number[]): number[] {
  return qs(nums, 0, nums.length - 1);
}

test("quick_sort", () => {
  expect(quick_sort(arr1)).toEqual(arr1.sort((a, b) => a - b));
  expect(quick_sort(arr2)).toEqual(arr2.sort((a, b) => a - b));
  expect(quick_sort(arr3)).toEqual(arr3.sort((a, b) => a - b));
  expect(quick_sort(arr4)).toEqual(arr4.sort((a, b) => a - b));
  expect(quick_sort(arr5)).toEqual(arr5.sort((a, b) => a - b));
});
