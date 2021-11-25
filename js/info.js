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

// закрытие меню вне его
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
