let nums = [-1, 0, 1, 2, -1, -4];

function three_sum() {
  let result: any = [];
  nums = nums.sort((a, b) => a - b);
  nums.forEach((first, idx) => {
    if (idx > 0 && first === nums[idx - 1]) return;
    let second = idx + 1,
      third = nums.length - 1;
    while (second < third) {
      let res = first + nums[second] + nums[third];
      if (res > 0) {
        third--;
      } else if (res < 0) {
        second++;
      } else {
        result.push([first, nums[second], nums[third]]);
        second++;
        while (nums[second] === nums[second - 1] && second < third) {
          second++;
        }
      }
    }
  });
  return result;
}

console.log(three_sum());
