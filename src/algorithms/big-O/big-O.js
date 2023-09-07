import { Compare, defaultCompare, defaultEquals, swap } from "../../util.js";

// O(1)
function increment(num) {
  return ++num;
}

// O(n)
function sequentialSearch(array, value, equalsFn = defaultEquals) {
  let cost = 0;
  for (let i = 0; i < array.length; i++) {
    cost++;
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  console.log(
    `cost for sequentialSearch with input size ${array.length} is ${cost}`
  );
  return -1;
}

// O(n²)
function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let cost = 0;
  for (let i = 0; i < length; i++) { // {1}
    cost++;
    for (let j = 0; j < length - 1; j++) { // {2}
      cost++;
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  console.log(`cost for bubbleSort with input size ${length} is ${cost}`);
  return array;
}
