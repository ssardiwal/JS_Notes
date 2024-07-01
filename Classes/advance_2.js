// we can take usage of this keyword
// for e.g.

class Munshi {
  amount = 0;
  add(amountToBeAdded) {
    this.amount = this.amount + amountToBeAdded;
  }
  subtract(amountToBeSubstracted) {
    this.amount = this.amount - amountToBeSubstracted;
  }
  value() {
    return this.amount;
  }
}

let customMunshi = new Munshi();
customMunshi.add(1);
customMunshi.add(3);
customMunshi.subtract(2);
console.log(customMunshi.value());
