/// Print array's elements
// Imperative programming
const printArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

// printArray([1, 2, 3, 4, 5]);

// Functional programming
const forEach = function (array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
};

const logItem = function (item) {
  console.log(item);
};

// forEach([1, 2, 3, 4, 5], logItem);

/// Minimum array's value
// Imperative programming
var findMinArray = function (array) {
  var minValue = array[0];
  for (var i = 1; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
    }
  }
  return minValue;
};
// console.log(findMinArray([8, 6, 4, 5, 9]));

// Functional programming
const min_ = function(array) {
    return Math.min(...array)
};
// console.log(min_([8, 6, 4, 5, 9]));

// Arrow functions
const min = arr => Math.min(...arr);
// console.log(min([8, 6, 4, 5, 9]));

// ES2015 sintaxe
const forEach2 = (array, action) => array(item => action(item));
const logItem2 = (item) => console.log(item);

