let arr = [1, 1, 0, -1, -1];

function plus_minus() {
  let map = {
    neg: 0,
    pos: 0,
    zero: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      map.neg += 1;
    } else if (arr[i] > 0) {
      map.pos += 1;
    } else if (arr[i] == 0) {
      map.zero += 1;
    }
  }
  let total = arr.length;
  console.log((map.pos / total).toFixed(6));
  console.log((map.neg / total).toFixed(6));
  console.log((map.zero / total).toFixed(6));
}

plus_minus();
