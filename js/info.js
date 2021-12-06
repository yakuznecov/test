// изменение цвета строки и svg при наведении и ухода мышки с объекта

$('.btn-register-features').on('mouseover', function () {
	$('.features-inner-register svg path').css('stroke', '#0475D5');
	$('.features-inner-register').css('border-color', '#0475D5');
	$('.features-inner-register svg path').css('transition', '0.3s');
	$('.features-inner-register').css('transition', '0.3s');
	$(this).css('color', '#0475D5');
});

$('.btn-register-features').on('mouseout', function () {
	$('.features-inner-register svg path').css('stroke', '#2699FB');
	$('.features-inner-register').css('border-color', '#2699FB');
	$('.features-inner-register svg path').css('transition', '0.3s');
	$('.features-inner-register').css('transition', '0.3s');
	$(this).css('color', '#2699FB');
});

// Событие при нажатии левой кнопки мыши

$('.btn-register-features').on('mousedown', function () {
	$('.features-inner-register svg path').css('stroke', '#2699FB');
	$('.features-inner-register').css('border-color', '#2699FB');
	$('.features-inner-register svg path').css('transition', '0.3s');
	$('.features-inner-register').css('transition', '0.3s');
	$(this).css('color', '#2699FB');
});

// событие схоже с «mousedown», происходит при касании пальцем экрана

$('.btn-register').on('touchstart', function () {
	$('.btn-register-inner svg path').css('stroke', '#697983');
	$('.btn-register-inner').css('border-color', '#697983');
	$('.btn-register-inner svg path').css('transition', '0.3s');
	$('.btn-register-inner').css('transition', '0.3s');
	$(this).css('color', '#697983');
});

// убираем палец с экрана, ака «mouseup»

$('.mobile-registration-btn').on('touchend', function () {
	$(this).css('color', '#fff');
	$(this).css('background-color', '#f3773b');
});

// Метод предотвращает дальнейшее выполнение события в дереве
// event.stopPropagation();

// При наведении мышки на ребенка, обращение идет к рядом стоящему с ним в блоке элементу, метод .siblings() и у ссылки меняется цвет и пропадает

$('.castings-menu-agent').on('mouseover', function () {
	$(this).siblings().addClass('active');
});

$('.castings-menu-agent').on('mouseout', function () {
	$(this).siblings().removeClass('active');
});

// закрытие меню вне его при клике
$(document).mouseup(function (e) {
	var modal = $('.menu-points-mobile');
	if (!modal.is(e.target) && modal.has(e.target).length === 0) {
		$('.menu-points-mobile').removeClass('active');
	}
});

// 3 кнопки, у которых добавляется класс active, у остальных убирается
$('.sidebar-burger__tabs-item-input').click(function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});

// Скрытие сайдбара при ресайзе окна и при разрешении ниже 1025px ----------------------------------------------------->
let isSidebarHidden = false;

window.addEventListener('resize', function () {
	if (window.innerWidth < 1025) {
		if (!isSidebarHidden) {
			hideSidebar();
		}
	} else {
		if (isSidebarHidden) {
			showSidebar();
		}
	}
});

function hideSidebar() {
	console.log('Прячем сайдбар');
	isSidebarHidden = true;
}

function showSidebar() {
	console.log('Показываем сайдбар');
	isSidebarHidden = false;
}
// ------------------------------------------------------------------------------------------------------------------------->

// Установить плейсхолдер -------------------------------------------------------------------------------------------------->
inputTopSearch.placeholder = 'Актёры';
// ------------------------------------------------------------------------------------------------------------------------->

// Метрики ----------------------------------------------------------------------------------------------------------------->
let elem = document.querySelector('.main-header-bottom-left');
elem.clientWidth, elem.clientHeight; // Ширина и высота с учетом паддингов, марджинов за вычетом скролла
elem.scrollTop; // Высота прокрутки содержимого блока
elem.scrollLeft; // величина прокрутки содержимого в левую сторону блока, скроллингом можно управлять программно
elem.scrollWidth; // Ширина содержимого с учетом прокрутки
elem.scrollHeight; // Высота содержимого с учетом прокрутки, менять значения нельзя
elem.offsetLeft; // содержит смещение блока от левого края экрана (отступ)
elem.offsetTop; // содержит смещение блока от верхнего края, обычно относительно body, либо предка объекта
elem.clientTop; // смещение сверху внутренней части области от края элемента
elem.clientLeft; // смещение слева внутренней части области от края элемента, может быть border
elem.offsetWidth; // Ширина элемента с учетом всех отступов
elem.offsetHeight; // Высота элемента с учетом всех отступов
window.innerWidth; // полная ширина окна браузера вместе с полосой прокрутки (если она есть)
window.innerHeight; // полная высота окна браузера вместе с полосой прокрутки (если она есть)
elem.scrollWidth, elem.scrollHeight; // ширина и высота всего html документа
window.pageXOffset; // смещение документа в окне браузера по оси x
window.pageYOffset; // смещение документа в окне браузера по оси y
window.scrollBy(offX, offY); // Прокручивает страницу относительно ее текущего положения на смещения offX и offY пикселей
window.scrollTo(pageX, pageY); // Прокручивает страницу до указанных координат pageX, pageY, работают после полной загрузки документа
elem.scrollIntoView(true); // Элемент при прокрутке будет вверху браузера. Если false в скобках, то элемент будет внизу окна браузера
document.body.style.overflow = 'hidden'; // скрывает скролл у страницы
document.body.style.overflow = ''; // показывает скролл у страницы
elem.getBoundingClientRect(); // полные координаты объекта
let x = document.elementFromPoint(x, y); // что находится в данной позиции на странице

// ------------------------------------------------------------------------------------------------------------------------->

// Убирает overflow при клике и добавляет обратно при клике на кнопку закрыть ----------------------------------------------->
const massActors = document.querySelector('.dropdown-text-js');
const transferActorsCloseBtn = document.querySelector('.transfer-actors-close-btn');

massActors.addEventListener('click', function () {
	mainItemsWrapper.style.overflow = 'inherit';
});

transferActorsCloseBtn.addEventListener('click', function () {
	mainItemsWrapper.style.overflow = 'overlay';
});

// ------------------------------------------------------------------------------------------------------------------------>

// Задачи

// что выведет?
console.log(1);
setTimeout(() => console.log(2));
setTimeout(console.log(3));
console.log(4);
// 1-3-4-2 setTimeout в третьем случае примет первым аргументом из двух undefined, и не будет добавлять в макротаски и сразу выполнит console.log

// Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.
const convertText = (text) => {
	if (text === '') {
		return '';
	}

	const reversable = text[0] !== text[0].toUpperCase();
	return reversable ? reverse(text) : text;
};

// Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:
const getNumberExplanation = (number) => {
	switch (number) {
		case 666:
			return 'devil number';
		case 7:
			return 'prime number';
		case 42:
			return 'answer for everything';
		default:
			return null;
	}
};

getNumberExplanation(8); // null

// Объяснения есть только для указанных ниже чисел
getNumberExplanation(666); // 'devil number'
getNumberExplanation(42); // 'answer for everything'
getNumberExplanation(7); // 'prime number'
