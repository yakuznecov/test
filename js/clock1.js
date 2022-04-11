var wnd;
var timer;

function updateClock() {
	if (wnd && wnd.closed) {
		stopClock();
	} else {
		var now = new Date();
		wnd.document.open();
		wnd.document.write('<h1>')
		wnd.document.write(now.toLocaleTimeString());
		wnd.document.write('</h1>')
		wnd.document.close();
	}
}

function startClock() {
	if (!timer) {
		wnd = open('', 'clockWindow', 'width=400, height=300');
		timer = setInterval(updateClock, 1000);
	} else {
		if (wnd) {
			wnd.focus(); // если окно скрыто и мы нажимаем старт еще раз, оно выходит на передний план
		} 
			
	}
}

function stopClock() {
	if (timer) {
		clearInterval(timer)
	}

	if (wnd) {
		wnd.close();
	}

	wnd = null;
	timer = null;
}