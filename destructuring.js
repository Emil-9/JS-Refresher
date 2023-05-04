// allow us to speard array elements or objects and save them to new const
// the difference between spread and destruct is
// 1- destruct pulls out certain number of elements or objects not all of them and assign them to new variables
//2- spreading will pull out all elements or objects and store them in a new array

const test1 = [1, 2, 3];
const [first, second] = test1;
console.log([first, second]); //Output -> [1, 2]
console.log(first, second); //Output -> 1 <br> 2
const [first1, , third] = test1;
console.log([first1, third]); // Output [1, 3]

// objects destructering
const test2 = { name: "Jhan" , age: 22};
const { name } = test2;
console.log(name);
