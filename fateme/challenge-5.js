function insertionSort(arr) {
  if (!validationCheck(arr)) return "bad request!";
  let j;
  for (let i = 1; i < arr.length; i++) {
    var temp = arr[i];
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) arr[j + 1] = arr[j];
    arr[j + 1] = temp;
  }
  return JSON.stringify(arr);
}

function validationCheck(arr) {
  if (!isArrTypeValid(arr)) return false;
  if (isArrEmpty(arr)) return false;
  for (const iterator of arr) {
    if (!isTypeValid(iterator, "number")) return false;
  }
  return true;
}

function isArrTypeValid(arr) {
  return Array.isArray(arr);
}

function isArrEmpty(arr) {
  return arr.length === 0;
}

function isTypeValid(value, trueType) {
  return typeof value === trueType
}

// test case
console.log(insertionSort(false));
console.log(insertionSort(""));
console.log(insertionSort([""]));
console.log(insertionSort([10, 11, 30, 33, 90, 99, -1, 20, 22]));
