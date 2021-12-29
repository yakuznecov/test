$(function () {
	$('.rateBtn').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass('active');
	});

	$('.points-grey-wrapper').mouseover(function () {
		$('.points-grey-btn-header').addClass('active');
	});

	$('.points-grey-wrapper').mouseout(function () {
		$('.points-grey-btn-header').removeClass('active');
	});

	// Плавное появление меню. Hover на родителе. А меню display: none;
	function showQuestionMenu() {
		$('.dropdown-question').hover(
			function () {
				$('.question-menu').fadeIn(200);
			},
			function () {
				$('.question-menu').fadeOut(100);
			}
		);
	}

	showQuestionMenu();

	// выбор нечетных элементов img
	var imgOdd = $('img:odd');

	// выбор элементов
	$(function () {
		var jq = $('label');

		// выбор первого элемента и воздействие на него
		jq.first().css('border', 'thick double red');

		// выбор последнего элемента и воздействие на него
		jq.last().css('border', 'thick double green');

		// выбор элемента с указанным индексом и воздействие на него
		jq.eq(2).css('border', 'thick double black');
		jq.eq(-2).css('border', 'thick double black');
	});

	// фильтрация элементов
	$(function () {
		// выборка элементов, в значении атрибута src которых
		// содержится строка 'astor'
		$('img').filter('[src*=astor]').css('border', 'thick double red');

		// выборка элементов, содержащих строку 'daffodil'
		var jq = $('[for*=daffodil]');
		$('label').filter(jq).css('color', 'blue');

		// выборка элементов, являющихся указанным элементом
		var elem = document.getElementsByTagName('label')[1];
		$('label').filter(elem).css('font-size', '1.5em');

		// фильтрация элементов с использованием функции
		$('img')
			.filter(function (index) {
				return this.getAttribute('src').indexOf('peony.png') > -1 || index == 5;
			})
			.css('border', 'thick solid red');
	});

	// Метод has()
	$(function () {
		$('div.dcell').has('img[src*=astor]').css('border', 'thick solid red');

		var jq = $('[for*=p]');
		$('div.dcell').has(jq).css('border', 'thick solid blue');
	});

	// Метод is()
	// В этом сценарии мы проверяем, содержит ли объект jQuery элемент со значением атрибута src, который включает строку 'rose.png'.
	$(function () {
		var isResult = $('img').is(function (index) {
			return this.getAttribute('src').indexOf('rose.png') != -1;
		});
		console.log('Результат: ' + isResult);
	});

	// Открываем по клику дропдауны с календарем и закрываем по клику в любом месте
	function addActiveOnClick(name) {
		$(name).click(function (e) {
			$(this).toggleClass('--active');
		});

		$(document).click(function (e) {
			let field = $(name);
			if (!field.is(e.target) && field.has(e.target).length === 0) {
				field.removeClass('--active');
			}
		});
	}

	addActiveOnClick('.dropdown-date');

	// Анимация rotate элемента
	$('.dropdown-flag-btn-icon').css({ transition: 'transform 0.2s', transform: 'rotate("180"deg)' });
})(jQuery);
