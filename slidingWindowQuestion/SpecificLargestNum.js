function checkArr(arr, k) {
  const len = arr.length;
  if (len > 0 && len >= k && k !== 0 && k > 0) {
    return true;
  } else {
    return false;
  }
}

async function largestnum(arr, k) {
  try {
    let respose = await checkArr(arr, k);
    if (respose) {
      arr.sort((a, b) => a - b);
      let len = arr.length;
      // console.log(arr[len-1]);
      let temp = arr[len];
      let count = 0;
      for (let i = len - 1; i > 0; i--) {
        if (temp !== arr[i]) {
          temp = arr[i];
          // console.log(temp);
          count++;
          if (k === count) {
            console.log(temp);
          }
        }
      }
    } else {
      return console.log("Error");
    }
  } catch (error) {
    return console.log("Error");
  }
}

largestnum([1, 1, 2, 2, 3, 3, 4, 4], 3);