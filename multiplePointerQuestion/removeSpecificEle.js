function removeEle(arr,num) {
    let len = arr.length;
if (len===0) {
return "Array have must 1 index";
}
    let newarr= [];
    for (let i = 0; i < len; i++) {
        if (arr[i]!=num) {
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
}
removeEle([1,2,3,4,5,23,43,5,3],5);