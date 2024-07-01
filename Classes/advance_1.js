class generateArea {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.radius = 5;
  }
  area() {
    console.log(this.width * this.height);
  }
  returnThis() {
    return this;
  }
}

let process = new generateArea(40, 40);

console.log(process);
console.log(process.returnThis());

// process logs a object : {height : 40 , width : 40, radius : 5}
// because class return an object with its properties
// and this keyword in class refers to the object scope
// thats why output of line 17 and 18 will be same

// one example to create counter

class Count {
  count = 0;
  increase() {
    this.count = this.count + 1;
  }
  value() {
    return this.count;
  }
}

let customCounter = new Count();
customCounter.increase();
customCounter.increase();
console.log(customCounter.value());

