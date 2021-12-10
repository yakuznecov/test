// var switchButton = document.querySelector('.switch-button');
// var switchBtnRight = document.querySelector('.switch-button-case.right');
// var switchBtnLeft = document.querySelector('.switch-button-case.left');
// var switchBtnMiddle = document.querySelector('.switch-button-case.middle');
// var activeSwitch = document.querySelector('.switch-button .active');

// switchBtnLeft.addEventListener('click', function () {
// 	switchBtnRight.classList.remove('active-case');
// 	switchBtnMiddle.classList.remove('active-case');
// 	switchBtnLeft.classList.add('active-case');
// 	activeSwitch.style.left = '0%';
// });

// switchBtnMiddle.addEventListener('click', function () {
// 	switchBtnMiddle.classList.add('active-case');
// 	switchBtnLeft.classList.remove('active-case');
// 	switchBtnRight.classList.remove('active-case');
// 	activeSwitch.style.left = '67%';
// });

// switchBtnRight.addEventListener('click', function () {
// 	switchBtnRight.classList.add('active-case');
// 	switchBtnLeft.classList.remove('active-case');
// 	switchBtnMiddle.classList.remove('active-case');
// 	activeSwitch.style.left = '33.33333%';
// });

const accordeons = document.querySelectorAll('.accordeon-item-title');

for (item of accordeons) {
	item.addEventListener('click', function () {
		this.classList.toggle('active');
	});
}

// $(function () {
// 	// 4 кнопки с одной активной при переключении
// 	$('.menu-header__info-item').click(function () {
// 		$(this).siblings().removeClass('active');
// 		$(this).addClass('active');
// 	});

// 	// Иконки приложений
// 	$('.appStore-box')
// 		.mouseover(function () {
// 			$('.appStoreDark').show();
// 		})
// 		.mouseout(function () {
// 			$('.appStoreDark').hide();
// 		});

// 	$('.googlePlay-box')
// 		.mouseover(function () {
// 			$('.googlePlayDark').show();
// 		})
// 		.mouseout(function () {
// 			$('.googlePlayDark').hide();
// 		});

// 	// При нажатии на поле, которе не сайдбар и не кнопка, происходит закрытие сайдбара

// 	// Start: Скрытие окна Массовое одобрение актеров при уходе мыши за пределы --------------------------------------------->
// 	$('.dropdown-transfer-actors').mouseleave(function () {
// 		$(this).removeClass('active');
// 	});

// 	// и на чистом JS
// 	document.querySelector('.dropdown-transfer-actors').addEventListener('mouseleave', (event) => {
// 		event.target.classList.remove('active');
// 	});

// 	// End: Скрытие окна Массовое одобрение актеров ----------------------------------------------->

// 	// Меняется ссылка в зависимости от выбранного слайда
// 	$('.registration-slider-inner').on('afterChange', function (event, slick, currentSlide) {
// 		var regBtn = $('.registration-btn');
// 		var regBtnMobile = $('.mobile-registration-btn');

// 		if (currentSlide === 0) {
// 			regBtn.attr('href', 'https://kinolift.com/ru/signup/actor');
// 			regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/actor');
// 		}

// 		if (currentSlide === 1) {
// 			regBtn.attr('href', 'https://kinolift.com/ru/signup/cd');
// 			regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/cd');
// 		}

// 		if (currentSlide === 2) {
// 			regBtn.attr('href', 'https://kinolift.com/ru/signup/director');
// 			regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/director');
// 		}

// 		if (currentSlide === 3) {
// 			regBtn.attr('href', 'https://kinolift.com/ru/signup/producer');
// 			regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/producer');
// 		}

// 		if (currentSlide === 4) {
// 			regBtn.attr('href', 'https://kinolift.com/ru/signup/agent');
// 			regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/agent');
// 		}
// 	});
// });
