// take this to a next level

class Munshi {
  amount = 0;
  add(amountToBeAdded) {
    this.amount = this.amount + amountToBeAdded;
    return this;
  }
  subtract(amountToBeSubstracted) {
    this.amount = this.amount - amountToBeSubstracted;
    return this; // this will return amount value as well class methods as well in form of prototypes
    // in this case we can do functional chaining
  }
  value() {
    return this.amount; // it will return the amount value only
    // in this case we cant do functional chaining
  }
}

let customMunshi = new Munshi();
console.log(customMunshi);
console.log(customMunshi.add(1).add(3).subtract(1).value());

// this (line 7 or 11) refers to current scope means this will return this amount property
// then calculation will be done on amount property and it will be passed in next chained function
// now the question is : if this return only amount property then how we are accessing the add and subtract method in function chaining one after another
// the answer is : objects methods are inheried in form of prototypes but they will be only visible in browers console logs in protoype object
