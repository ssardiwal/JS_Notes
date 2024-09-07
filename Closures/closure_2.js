function counterMethod() {
	let count = 0;

	return {
		increment() {
			console.log(++count);
		},
		decrement() {
			console.log(--count);
		},

		value() {
			console.log(count);
		},
	};
}

let count = counterMethod();

count.increment();
count.increment();
count.increment();
count.decrement();
count.value();
