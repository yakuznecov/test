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

// Событие нажатия на сенсорных экранах

$('.btn-register').on('touchstart', function () {
	$('.btn-register-inner svg path').css('stroke', '#697983');
	$('.btn-register-inner').css('border-color', '#697983');
	$('.btn-register-inner svg path').css('transition', '0.3s');
	$('.btn-register-inner').css('transition', '0.3s');
	$(this).css('color', '#697983');
});
