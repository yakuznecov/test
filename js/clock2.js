var timer;

function updateClock() {
		var now = new Date();
		var c = document.querySelector('.clock');

		console.log(c);

		if (c) {
			c.innerHTML = now.toLocaleTimeString();
		} else {
			stopClock();
		}
}

function startClock() {
	if (!timer) {
		timer = setInterval(updateClock, 1000);
	}
}

function stopClock() {
	if (timer) {
		clearInterval(timer)
	}

	timer = null;
}