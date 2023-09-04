function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  let minValue = array[0];
  let maxValue = array[0];
  let significantDigit = 1;
  for (let value of array) {
    if (value > maxValue) maxValue = value;
    if (value < minValue) minValue = value;
  }
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    significantDigit *= radixBase;
  }
  return array;
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
  let buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) { // {5}
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) { // {6}
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {7}
    buckets[i] += buckets[i - 1]; // {8}
  }
  for (let i = 1; i < radixBase; i++) { // {9}
    buckets[i] += buckets[i - 1];
  }
  for (let i = array.length - 1; i >= 0; i--) { // {10}
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {11}
    aux[--buckets[bucketsIndex]] = array[i]; // {12}
  }
  for (let i = 0; i < array.length; i++) { // {13}
    array[i] = aux[i];
  }
  return array;
}
