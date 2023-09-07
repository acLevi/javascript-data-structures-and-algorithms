/// Map
// Imperative programming
const daysOfWeek = [
  { name: "Monday", value: 1 },
  { name: "Tuesday", value: 2 },
  { name: "Wednesday", value: 7 },
];
let daysOfWeekValues_ = [];
for (let i = 0; i < daysOfWeek.length; i++) {
  daysOfWeekValues_.push(daysOfWeek[i].value);
}

// ES2015+
const daysOfWeekValues = daysOfWeek.map((day) => day.value);
// console.log(daysOfWeekValues);

/// Filter
// Imperative programming
const positiveNumbers_ = function (array) {
  let positive = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positive.push(array[i]);
    }
  }
  return positive;
};
// console.log(positiveNumbers_([-1, 1, 2, -2]));

// Functional programming
const positiveNumbers = (array) => array.filter((num) => num >= 0);
// console.log(positiveNumbers([-1, 1, 2, -2]));

/// Reduce
// Imperative programming
const sumValues = function (array) {
  let total = array[0];
  for (let i = 1; i < array.length; i++) {
    total += array[i];
  }
  return total;
};
// console.log(sumValues([1, 2, 3, 4, 5]));

// Functional programming
const sum_ = function (array) {
  return array.reduce(function (a, b) {
    return a + b;
  });
};
// console.log(sum_([1, 2, 3, 4, 5]));

// Arrow functions
const sum = (arr) => arr.reduce((a, b) => a + b);
// console.log(sum([1, 2, 3, 4, 5]));

/// Merge Arrays
// Imperative programming

const mergeArrays_ = function (arrays) {
  const count = arrays.length;
  let newArray = [];
  let k = 0;
  for (let i = 0; i < count; i++) {
    for (var j = 0; j < arrays[i].length; j++) {
      newArray[k++] = arrays[i][j];
    }
  }
  return newArray;
};
// console.log(mergeArrays_([[1, 2, 3], [4, 5], [6]]));

// Functional programming
const mergeArraysConcat = function (arrays) {
  return arrays.reduce(function (p, n) {
    return p.concat(n);
  });
};
// console.log(mergeArraysConcat([[1, 2, 3], [4, 5], [6]]));

// ES2015
const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1,2,3], [4, 5], [6]));