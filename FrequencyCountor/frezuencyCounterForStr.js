function freqElem(arr) {
  arr = [...arr];
  arr.sort();
  let length = arr.length;
  let temp = arr[0];
  let count = 0;
  let freqObj = {};
  for (let i = 0; i < length; i++) {
    if (arr[i] == temp) {
      count++;
      freqObj[arr[i]] = count;
    } else {
      count = 1;
      temp = arr[i];
      freqObj[arr[i]] = count;
    }
  }
  return freqObj;
}
console.log(freqElem("HEXAGONAL"));
