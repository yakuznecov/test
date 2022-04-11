let ps = document.querySelectorAll('p');
let selectedP = null;

ps.forEach(p => {
	p.addEventListener('click', function () {
		if (selectedP) {
			selectedP.style.color = ''; // снимаем цвет у других элементов
		}

		this.style.color = 'red'; // красим выбранный параграф в красный цвет
		selectedP = this;
	});
})