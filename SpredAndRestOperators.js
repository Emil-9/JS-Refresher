// Spread operators can be used to objects or arrays
// example 1

const test1 = [1, 3, 5];
const test2 = [...test1, 7]; // Output -> [1, 3, 5, 7]
const test3 = [test1, 7]; // Output -> [[1, 3, 5], 7]

const obj = {
  name: "Emil",
};
const newObj = {
  ...obj,
  age: 27,
};
console.log(newObj);
// Output -> [object Object] { age: 27, name: "Emil" }

const newObj2 = {
  obj,
  age: 27,
};
//   Output -> [object Object] {age: 27, obj: [object Object] { name: "Emil" }}

// -------------------------------------------------------------------- //
// rest operators
// the rest operator takes a spreaded arguments inside it and gather it as an array -> that for we can apply filter method to the args
const restOp = (...args) => {
  return args.filter((e) => e === 1); // filter elements who equals 1 by value and type
};
console.log(restOp(1, 3, 5)); // output -> [1]
console.log(restOp(1, 3, 1)); // output -> [1, 1]

