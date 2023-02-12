function checkArr(arr, k) {
  const len = arr.length;
  if (len > 0 && len >= k && k !== 0 && k > 0) {
    return true;
  } else {
    return false;
  }
}

async function minNumSum(arr, k) {
  try {
    let respose = await checkArr(arr, k);
    if (respose) {
      const len = arr.length;
      let minSum = 0;
      let totalSumofThree = 0;
      for (let i = 0; i < k; i++) {
        minSum += arr[i];
      }
      totalSumofThree = minSum;
      for (let i = 0; i < len - k; i++) {
        minSum = minSum - arr[i] + arr[i + k];
        // console.log("minSum,arr[i+2],arr[i]",minSum,arr[i+3],arr[i]);
        // console.log(totalSumofThree);
        if (minSum < totalSumofThree) {
          totalSumofThree = minSum;
        }
      }
      console.log(totalSumofThree);
    } else {
      return console.log("Error");
    }
  } catch (error) {
    return console.log("Error");
  }
}
minNumSum([2, 3, -2, -4, 6, 7, 8, 1], 1);
