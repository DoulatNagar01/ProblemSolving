function countTheDuplicate(arr) {
    let len = arr.length;
     if (len===0) {
         return "Array have must 1 index";
     }
    let temp = arr[0];
    let obj = {};
    let count=0;
    arr.sort((a,b)=>a-b);
    for (let i = 0; i < len; i++) {
        if (arr[i] == temp) {
            count++;
            obj[arr[i]]=count;
        }
        else{
            count=0;
            temp = arr[i];
            obj[arr[i]]=count;

        }
    }
    console.log(obj);
}
countTheDuplicate([1,2,4,2,3,2,4]);