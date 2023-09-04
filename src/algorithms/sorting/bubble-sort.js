import { Compare, defaultCompare, swap } from "../../util.js";

// function bubbleSort(array, compareFn = defaultCompare) {
//   const { length } = array;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - 1; j++) {
//       if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
//         swap(array, j, j + 1);
//       }
//     }
//   }
//   return array;
// }

// function createNonSortedArray(size) {
//   const array = [];
//   for (let i = size; i > 0; i--) {
//     array.push(i);
//   }
//   return array;
// }

// let array = createNonSortedArray(6);
// console.log(array.join());
// array = bubbleSort(array);
// console.log(array.join());

function modifiedBubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
