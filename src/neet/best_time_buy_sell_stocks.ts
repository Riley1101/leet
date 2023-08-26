let prices = [7, 1, 5, 3, 6, 4];

function maxProfit(): number {
  let left = 0;
  let right = 1;
  let maxP = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let p = prices[right] - prices[left];
      maxP = Math.max(maxP, p);
    } else {
      left = right;
    }
    right += 1;
  }
  return maxP;
}

console.log(maxProfit());
