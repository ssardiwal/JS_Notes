//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. Objects
// name and lastName are the properites and greet is a method
// In objects, direct functions is called methods
let person = {
  name: "sagar",
  lastName: "kumar",
  greet: function () {
    console.log("Hello" + this.name + " " + this.lastName);
  },
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Classes
// Blueprint to create objects

// 3. Encapsulation
// Restricting access to object components

class Person {
  constructor(name, age) {
    this.name = name; // access is restricted from outside means its encapsulated
    this.age = age; // access is restricted from outside means its encapsulated
  }
  greet() {
    console.log(this.name + "is of " + this.age + "yrs old");
  }
}

let createPerson = new Person("Sagar", 26);
createPerson.greet();

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4. Inheritance
// extend one class with another
// extended properties must be added in constructor and super
// everything normally works

class Employee extends Person {
  constructor(name, age) {
    super(name, age);
    this.job = job;
  }
  work() {
    console.log(this.name, this.job);
  }
}
let employee1 = new Employee("Sagar", 26, "Developer");
employee1.work(); // same class
employee1.greet(); // from parent class

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. Polymorphis,
// same methods but different behaviour
// or we can say
// same interface different data types
class Animal {
  speak() {
    console.log("animal makes a sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

let animalCategory = [new Animal(), new Dog()];
animalCategory.forEach((item) => item.speak());
// 'animal makes a sound', 'dog barks'
