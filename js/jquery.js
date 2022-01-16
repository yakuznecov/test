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

	// Start: Плавное появление меню. Hover на родителе. А меню display: none;
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
	// End: Плавное появление меню. Hover на родителе. А меню display: none;

	// Start: Скрытие окна Массовое одобрение актеров
	const hideMassActors = () => {
		let dropTransferActors = $('.dropdown-transfer-actors');

		dropTransferActors.on('mouseenter', (event) => {
			event.stopPropagation();
		});

		dropTransferActors.on('mouseleave', (event) => {
			$(event.currentTarget).removeClass('active');
			mainItemsWrapper.css('overflow', 'overlay');
		});
	};

	hideMassActors();

	// End: Скрытие окна Массовое одобрение актеров

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

	// Start: Открываем по клику дропдауны с календарем и закрываем по клику в любом месте
	function addActiveOnClick(name) {
		$(name).click(function (e) {
			$(this).toggleClass('--active');
		});

		$(document).click(function (e) {
			let field = $(name); // контейнер, который нужно закрыть
			if (!field.is(e.target) && field.has(e.target).length === 0) {
				field.removeClass('--active');
			}
		});
	}

	addActiveOnClick('.dropdown-date');
	// End: Открываем по клику дропдауны с календарем и закрываем по клику в любом месте

	// Анимация rotate элемента
	$('.dropdown-flag-btn-icon').css({ transition: 'transform 0.2s', transform: 'rotate("180"deg)' });

	// Start: Событие при resize окна браузера
	$(window).resize(function () {
		$(window).width() < 1025; // Если ширина окна меньше 1025
	});
	// End: Событие при resize окна браузера

	// Start: Смена плейсхолдера у инпута при загрузке страницы и смене размера экрана
	function changeInputPlaceholder() {
		let inputTopSearch = $('.input-top-search-js');

		$(window).on('load resize', function () {
			if ($(window).width() < 1281) {
				inputTopSearch.attr('placeholder', 'Актёры');
			} else {
				inputTopSearch.attr('placeholder', 'Актёры в этом кастинге');
			}
		});
	}

	changeInputPlaceholder();
	// End: Смена плейсхолдера у инпута при загрузке страницы и смене размера экрана

	// Start: Метрики
	$(document).width(); // возвращает ширину HTML документа
	$(window).width(); // возвращает ширину области просмотра браузера
	element.offset().left; // Растояние от левого края документа
	element.width(); // Ширина элемента
	// End: Метрики

	// Start: Range input slider in transfer-actors
	function showRangeSliderActors() {
		const rangeTransferOne = $('input[name="rangeTransferOne"]');
		const outputTransferOne = $('.outputTransferOne');
		const transferinclRange = $('.transfer-incl-range');

		const updateTransferView = function () {
			if (this.attr('name') === 'rangeTransferOne') {
				const left = (this.val() / this.attr('max')) * (100 - 3.5) + '%';
				outputTransferOne.html(this.val());
				outputTransferOne.css('left', `${left}`);
			}

			if (this.val()) {
				const width = (this.val() / this.attr('max')) * 100 + '%';
				transferinclRange.css('width', `${width}`);
			}
		};

		$(document).ready(function () {
			updateTransferView.call(rangeTransferOne);
			$('.rangeTransferOne')
				.on('mouseup', function () {
					this.blur();
				})
				.on('mousedown input', function () {
					updateTransferView.call($(this));
				});
		});
	}

	showRangeSliderActors();

	var rangeOne = document.querySelector('input[name="rangeOne"]'),
		rangeTwo = document.querySelector('input[name="rangeTwo"]'),
		outputOne = document.querySelector('.outputOne'),
		outputTwo = document.querySelector('.outputTwo'),
		inclRange = document.querySelector('.incl-range'),
		updateView = function () {
			if (this.getAttribute('name') === 'rangeOne') {
				outputOne.innerHTML = this.value;
				outputOne.style.left = (this.value / this.getAttribute('max')) * (100 - 3.5) + '%';
			} else {
				outputTwo.style.left = (this.value / this.getAttribute('max')) * (100 - 3.5) + '%';
				outputTwo.innerHTML = this.value;
			}
			if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
				inclRange.style.width = ((rangeOne.value - rangeTwo.value) / this.getAttribute('max')) * 100 + '%';
				inclRange.style.left = (rangeTwo.value / this.getAttribute('max')) * 100 + '%';
			} else {
				inclRange.style.width = ((rangeTwo.value - rangeOne.value) / this.getAttribute('max')) * 100 + '%';
				inclRange.style.left = (rangeOne.value / this.getAttribute('max')) * 100 + '%';
			}
		};

	setListener(document, 'DOMContentLoaded', () => {
		updateView.call(rangeOne);
		updateView.call(rangeTwo);
		$('.double-range')
			.on('mouseup', function () {
				this.blur();
			})
			.on('mousedown input', function () {
				updateView.call(this);
			});
	});
	// End: Range input slider in transfer-actors

	// Trigger focus input, если нужно при нажатии на все поле
	$(function () {
		$('.input-box').click(function () {
			$(this).find('input').focus();
		});
	});

	// Start: Trigger focus textarea and custom scroll
	$(function () {
		const field = $('.area-field-wrapper');

		field.click(function () {
			$(this).find('textarea').focus();
			$(this).addClass('active');
		});

		$(document).click(function (e) {
			if (!field.is(e.target) && field.has(e.target).length === 0) {
				field.removeClass('active');
			}
		});
	});

	// End: Trigger focus textarea and custom scroll
})(jQuery);
