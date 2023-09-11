let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 7;

function search_rotated_sorted() {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target == nums[mid]) return mid;

    if (nums[mid] >= nums[left]) {
      if (nums[mid] < target || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}

console.log(search_rotated_sorted());
