const person = {
  name: "Emil",
};
const personOne = person;
console.log(personOne);
// the output will be an indicator for the the person object
// the person object is stored in the memory not the personOne
// result -> {Emil}

// ------------------------------------------------------

const person1 = {
  name: "Emil",
};
const personOne1 = person1;
console.log(personOne1);

person1.name = "ali";
// the console now will print out {ali} even if the personOne1 was executed before the name change
// because personOne1 is fetching the value of perrson1
// now if we changed the reference link this ->

// -------------------------------------------------------

const person2 = {
  name: "Emil",
};
const personTwo = { ...person2 };
console.log(personTwo);
person2.name = "sam";
// the output is Emil 
// because the personTwo copied the old value of person2 before being changed and saved it to the memory 

