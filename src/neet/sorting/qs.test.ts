let nums = [4, 2, 1, 4, 5, 12, 4, 67];
function quickSort(nums: number[]) {
  if (nums.length === 0) return [];
  let pivot = nums[nums.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > pivot) {
      right.push(nums[i]);
    } else {
      left.push(nums[i]);
    }
  }
  let sortedLeft: number[] = quickSort(left);
  let sortedRight: number[] = quickSort(right);
  return sortedLeft.concat(pivot, sortedRight);
}

console.log(quickSort(nums));
