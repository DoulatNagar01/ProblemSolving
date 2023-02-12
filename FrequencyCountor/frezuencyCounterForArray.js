const frequencyOfElementsInArray = (array) => {
    array.sort((a, b) => a - b);
    const length = array.length;
    let i = 0;
    const obj = {};
    counter = 1;
    for (let j = 1; j < length; j++) {
  
      if (array[i] == array[j]) {
        counter++;
        obj[array[i]] = counter;
        i = j;
      }
      else {
        obj[array[i]] = counter;
        i++;
        counter = 1;
      }
    }
    return obj;
  }
  const arr = frequencyOfElementsInArray([1, 2, 3, 4, 5, 6, 3, 6, 2]);
  console.log(arr);  