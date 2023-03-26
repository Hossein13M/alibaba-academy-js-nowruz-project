function insertionSort(arr) {
  if (!isArrValid(arr)) return "bad request!";
  let j;
  for (let i = 1; i < arr.length; i++) {
    var temp = arr[i];
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) arr[j + 1] = arr[j];
    arr[j + 1] = temp;
  }
  return JSON.stringify(arr);
}

function isArrValid(arr) {
  if (Array.isArray(arr) && arr.length !== 0) {
    for (const iterator of arr) {
      if (typeof iterator !== "number") return false;
    }
  }
  return Array.isArray(arr) && arr.length !== 0;
}

// test case
console.log(insertionSort(false));
console.log(insertionSort(""));
console.log(insertionSort([""]));
console.log(insertionSort([10, 11, 30, 33, 90, 99, -1, 20, 22]));
