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

function stock_profit() {
  let left = 0;
  let right = 1;
  let max = 0;
  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right;
    } else {
      max = Math.max(max, prices[right] - prices[left]);
    }
    right++;
  }
  return max;
}

function best_stock() {
  let left = 0;
  let right = 1;
  let max = 0;
  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      let profits = prices[right] - prices[left];
      max = Math.max(max, profits);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

function best_stokie() {
  let left = 0;
  let max = 0;
  for (let right = 1; right < prices.length; right++) {
    if (prices[left] < prices[right]) {
      max = Math.max(max, prices[right] - prices[left]);
    } else {
      left = right;
    }
  }
  return max;
}
console.log(best_stokie());
