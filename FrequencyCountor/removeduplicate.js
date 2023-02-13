// using push and newArray.

// function removeEle(arr,num) {
//     let len = arr.length;
//     let count = 0;
// if (len===0) {
// return "Array have must 1 index";
// }
//     let newarr= [];
//     for (let i = 0; i < len; i++) {
//         if (arr[i]!=num) {
//             newarr.push(arr[i]);
//             count++;
//         }
//     }
//     console.log(newarr,count);
// }
// removeEle([1,2,5,5,3],5);

// without using push and NewArray

const arr = [1, 3, 3, 5, 5, 5, 7];
const n = arr.length;
const countUniqueValues = (arr) => {
  const counts = {};
  for (let i = 0; i < n; i++) {
    counts[arr[i]] = counts[arr[i]] || 0;
  }
  return counts;
};
console.log(countUniqueValues(arr));
