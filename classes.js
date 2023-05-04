// this example is about a simple class and inerhit parent class
//  This is normal JS Syntax not es7

// Code Example 1
// this is the parent class that is passed to the second class
class Person {
  //the property
  constructor() {
    this.age = "30";
  }
  // the method
  printAge() {
    console.log(this.age);
  }
}

// this is the child class passed the age to it
class PersonName {
  constructor() {
    super(); // we have to call this method to execute the parent constructor to the child constructor
    this.name = "Emil";
    // We can change the age from the parent class by saying this.age = '35';
  }
  printName() {
    console.log(this.name);
  }
}

// Notice that a class can't be executed like a function we have to follow this

const test = new PersonName();
test.printAge();
test.printName();
//    Output is :  30 <br> Emil

// ----------------------------------------------------------------------------------------  //
// Code example 2
// Same previous code but in es6/es7  syntax
// In ES6 and more the class property can be withut constructor call and the method can be replaced with arrow function

class Person {
  age = "20";
  printAge = () => {
    console.log(this.age);
  };
}

class cat extends Person {
  //  No need for super any more
  // replaced with normal declaration
  name = "Smelly cat";
  //  to change the age just type age = '40';
  //replaced with arrow function
  printName = () => {
    console.log(this.name);
  };
}

const test2 = new cat();
test2.printName();
test2.printAge();
