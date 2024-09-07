let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise resolve");
  }, 1000);
});

p1.then((res) => console.log("res :>> ", res));
