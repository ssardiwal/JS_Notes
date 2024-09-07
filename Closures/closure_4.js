// example that make sure your function is called only once

const initialize = once(() => console.log("initialized"));

function once(fun) {
	let isAlreadyCalled = false;
	return function () {
		if (!isAlreadyCalled) fun();
		return (isAlreadyCalled = true);
	};
}

initialize();
initialize();
initialize();
