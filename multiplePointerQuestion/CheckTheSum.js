function checkTheesum(arr, a) {
  arr.sort((a, b) => a - b);
  const len = arr.length;
  if (arr[len - 1] + arr[len - 2] >= a) {
    let j = len - 1;
    for (let i = 0; i < len; i++) {
      if (arr[i] + arr[j] === a) {
        return console.log(true);
      } else if (i === j) {
        return console.log(false);
      } else if (arr[i] + arr[j] > a) {
        j--;
        i--;
      }
    }
  } else {
    return console.log(0);
  }
  return console.log(0);
}
checkTheesum([1, 2, 3, 3, 4, 5, 1, 7, 9], 9);