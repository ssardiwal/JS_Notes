//------------------------------------------------------------------------------------------------------------------------------------------------------
// Classes are referred as Constructor function
// new keyword automatically calls the class contructor
// in case of extends, extends properties must be passed in super
// means supers calls the parent class constructor
//
// this refers to the class scope because this always refers to the object in which it is called

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // super calls the parent class constructor so it gets 'name'
    // and 'name' must be passed while calling using new keyword
    // new our case we passed Buddy
    this.breed = breed;
  }
}

let dog1 = new Dog("Buddy", "Golden Retriever");
