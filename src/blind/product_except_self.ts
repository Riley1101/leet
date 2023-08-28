let nums = [1, 2, 3, 4];
function product_except_self() {
  let prefix = [];
  let postfix = [];
  let result = [];
  let val = 1;
  for (let i = 0; i < nums.length; i++) {
    val *= nums[i];
    prefix[i] = val;
  }
  val = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    val *= nums[i];
    postfix[i] = val;
  }
  for (let i = 0; i < nums.length; i++) {
    let left = i - 1 < 0 ? 1 : prefix[i - 1];
    let right = i + 1 >= nums.length ? 1 : postfix[i + 1];
    let val = left * right;
    result.push(val);
  }
  return result;
}

console.log(product_except_self());
