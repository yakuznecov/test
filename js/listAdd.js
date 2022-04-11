function addToList() {
	let text = prompt('Новый пункт', ''); // просим ввести строку

	if (text) {
		let li = document.createElement('li');
		li.textContent = text;
		let ul = document.querySelector('ul#list');
		// ul.appendChild(li); // добавление в конец списка
		// ul.insertBefore(li, ul.firstChild); // добавление элемента в начало списка

		let lis = document.querySelectorAll('ul#list > li'); // получаем массив элементов li

		if (lis.length == 0 || text >= lis[lis.length - 1].textContent) {
			ul.appendChild(li);
		} else {
			for (let i = 0; i < lis.length; i++) {
				if (lis[i].textContent >= text) {
					ul.insertBefore(li, lis[i]);
					break;
				}
			}
		}

		li.addEventListener('click', clickOnItem);
	}
}

function clickOnItem() {
	let s = this.parentNode.querySelector('li.selectedItem'); // берем тот элемент, на который кликнули. Берем у него родителя. Ищем элемент, выделенный ранее с таким классом
	if (s) {
		s.classList.remove('selectedItem'); // если такой есть, то у него убираем выделенный класс
	}

	if (s != this) {
		this.classList.add('selectedItem'); // если элемент не совпадает с выделенным ранее, то добавляем класс.
	}
}

// удаление последнего элемента в массиве li
function deleteLastElement() {
	let lastLi = document.querySelectorAll('body li');

	if (lastLi.length > 0) {
		lastLi[lastLi.length - 1].parentNode.removeChild(lastLi[lastLi.length - 1]);
	}
}

function removeFromList() {
	// let li = document.querySelector('ul#list > li:last-of-type'); // находит последний элемент li
	let li = document.querySelector('ul#list > li.selectedItem');
	if (li && confirm(`Удалить пункт: '${li.textContent}'?`)) {
		li.parentNode.removeChild(li);
	}
}

// при загрузке страницы
document.onreadystatechange = () => {
	// пример из документации
	if (document.readyState === 'interactive') {
		document.querySelectorAll('ul#list > li').forEach((li) => {
			li.addEventListener('click', clickOnItem);
		});
	}
};