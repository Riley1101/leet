let nums = [1, 2, 3, 4];

export function product_of_arr_without_self() {
  let n = nums.length;
  let left_products = [];
  let right_products = [];
  let output = [];

  left_products[0] = 1;
  right_products[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    left_products[i] = nums[i - 1] * left_products[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    right_products[i] = nums[i + 1] * right_products[i + 1];
  }
  for (let i = 0; i < n; i++) {
    output[i] = left_products[i] * right_products[i];
  }
  return output;
}

function product_array_without_self() {
  let n = nums.length;
  let left = [];
  let right = [];
  let output = [];
  left[0] = 1;
  right[n - 1] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  for (let j = n - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }
  for (let i = 0; i < n; i++) {
    output[i] = left[i] * right[i];
  }
  return output;
}

console.log(product_array_without_self());
