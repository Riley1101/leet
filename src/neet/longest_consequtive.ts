let nums = [100, 4, 200, 1, 3, 2];
function longeestConsequtive() {
  let set = new Set(nums);
  let longest = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num + length)) {
        length += 1;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}
