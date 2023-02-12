function profitLoss(arr, buy, sell) {
  if (arr.length === 7 && buy<7 &&-1<buy && sell<7 &&-1<sell) {
    if (arr[buy] > arr[sell]) {
      console.log("Profit : ", arr[buy] - arr[sell]);
    } else if (arr[buy] < arr[sell]) {
      console.log("loss : ", arr[sell] - arr[buy]);
    } else {
      console.log("No Profit and Loss");
    }
  } else {
    console.log("Error");
  }
}
profitLoss([4, 8, 9, 7, 6, 12, 1], );
