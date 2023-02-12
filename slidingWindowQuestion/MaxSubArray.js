function checkArr(arr, k) {
  const len = arr;
  if (len > 0 && len >= k && k !== 0 && k>0) {
    return true;
  } else {
    return false;
  }
}

async function maxNumSum(arr, k) {
  try {
    let respose = await checkArr(arr.length, k);
    if (respose) {
      const len = arr.length;
      let maxSum = 0;
      let totalSumofThree = 0;
      for (let i = 0; i < k; i++) {
        maxSum += arr[i];
      }
      totalSumofThree = maxSum;
      // console.log("maxSum",maxSum);
      for (let i = 0; i < len - k; i++) {
        maxSum = maxSum - arr[i] + arr[i + k];
        if (maxSum > totalSumofThree) {
          totalSumofThree = maxSum;
        }
      }
      console.log(totalSumofThree);
    } else {
      return console.log("Error------");
    }
  } catch (error) {
    return console.log("Error=======");
  }
}
maxNumSum([0,4,4], 6);
