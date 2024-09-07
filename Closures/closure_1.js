// basic example of - on off using closure

function onOff() {
	let status = 1;
	return function () {
		if (status === 1) {
			console.log("on");
			status = 0;
		} else {
			console.log("off");
			status = 1;
		}
	};
}
let toggle = onOff();
toggle();
toggle();
toggle();
toggle();
toggle();
