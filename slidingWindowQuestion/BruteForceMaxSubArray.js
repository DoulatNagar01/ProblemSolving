// Brute Force Approch. n^2 complexity
function checkArr(arr, k) {
    const len = arr.length;
    if (len > 0 && len >= k && k !== 0 && k>0) {
      return true;
    } else {
      return false;
    }
  }
  async function maxNumSum(arr, k) {
    try {
      let respose = await checkArr(arr, k);
      if (respose) {
        const len = arr.length;
        let maxArr;
        for (let i = 0; i <= len - k; i++) {
          let maxSum = 0;
          for (let j = 0; j < k; j++) {
            maxSum += arr[i + j];
          }
          if (i == 0 || maxArr < maxSum) {
            maxArr = maxSum;
          }
        }
        return console.log(maxArr);
      } else {
        return console.log("Error");
      }
    } catch (error) {
      return console.log("Error");
    }
  }
  maxNumSum([2,3,-2,-4,6,7,8,1], 3);