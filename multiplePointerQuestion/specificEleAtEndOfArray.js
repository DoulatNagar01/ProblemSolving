// function placeToEnd(arr,endNum) {
//     let len = arr.length;
//         if (len===0) {
//             return "Array have must 1 index";
//         }
//     let arr1= [];
//     for (let i = 0; i < len; i++) {
//         if (arr[i]===endNum) {
//             arr1.push(arr[i]);
//         } else {
//             arr1.unshift(arr[i]);
//         }
//     }
//     return arr1;
// }

// console.log(placeToEnd([1,2,3,43,2,34,2],2));

function placeToEnd(arr){
    let i = 0;
    let j = arr.length - 1;
    while (j > i) {
      if (arr[i] == 0) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j--;
      } else {
        i++;
      }
    }
    return console.log(arr);
  }
  placeToEnd([0, -1, 3, 4, 5, 0, 0, 0, 1, 2, 0, 4, 0]);