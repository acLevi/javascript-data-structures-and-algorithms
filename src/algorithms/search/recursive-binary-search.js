import { Compare, DOES_NOT_EXIST, defaultCompare } from "../../util.js";
import { quickSort } from "../sorting/quick-sort.js";

function binarySearchRecursive(
  array,
  value,
  low,
  high,
  compareFn = defaultCompare
) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, mid - 1, high, compareFn);
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

export function binarySearch(
  array,
  value,
  compareFn = defaultCompare
) {
  const sortedArray = quickSort(array);
  const low = 0;
  const high = sortedArray.length - 1;
  return binarySearchRecursive(array, value, low, high, compareFn);
}
