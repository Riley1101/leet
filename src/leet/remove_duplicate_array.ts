let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

export function remove_duplicates() {
  let index = 1; // first will always be unique
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}

console.log(remove_duplicates());
