// most important array JS functions For react

// 1- Array.prototype.findIndex()
// returns the index number of the first element that achievs the testing function
// this example find the first element larger than 13
// output -> 3 because the fourth element is the first element which is larger than 13
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

// 2- Array.prototype.find()
// returns the first element that achieves the testing function
// the result is 12
const array2 = [5, 12, 8, 130, 44];
const found = array2.find((element) => element > 10);
console.log(found);

// 3- Array.prototype.splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1 and no replace
console.log(months);
// ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// ["Jan", "Feb", "March", "April", "May"]

// 4- Array.prototype.slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
// ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// ["camel", "duck"]
console.log(animals.slice(1, 5));
// ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// ["duck", "elephant"]
console.log(animals.slice(2, -1));
// ["camel", "duck"]
console.log(animals.slice());
// ["ant", "bison", "camel", "duck", "elephant"]

// 5- Array.prototype.concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const arrayConcat = ["a", "b", "c"];
const arrayConcat2 = ["d", "e", "f"];
const arrayConcat3 = arrayConcat.concat(arrayConcat2);
console.log(arrayConcat3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// 6- Array.prototype.reduce()
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

const arrayReduce = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arrayReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// Expected output: 10

// 7- Array.prototype.filter()
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
