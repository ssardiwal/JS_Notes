// important example with normal function and one level of chaining

let count = counterMethod();

function counterMethod() {
	let count = 0;
	function abc() {
		return ++count;
	}
	abc.reset = function () {
		count = 0;
		return count;
	};
	return abc;
}

console.log(count());
console.log(count());
console.log(count.reset());
console.log(count());
