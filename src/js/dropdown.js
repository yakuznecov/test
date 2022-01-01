(function ($) {
	// Открытие дропдауна по клику, обращение к рядом стоящему меню

	// <div class="dropdown-select">
	// 	<button class="dropdown-select-btn">
	// 		Нажмите, чтобы выбрать
	// 	</button>
	// 	<div class="dropdown-select-menu">
	// 		...
	// 	</div>
	// </div>;

	function showDropdownSelect() {
		$('.dropdown-select-btn').click(function () {
			$(this).siblings('.dropdown-select-menu').toggleClass('menu-active');
		});

		$(document).click(function (e) {
			let area = $('.dropdown-select');
			if (!area.is(e.target) && area.has(e.target).length === 0) {
				$('.dropdown-select-menu').removeClass('menu-active');
			}
		});
	}

	showDropdownSelect();

	// Открытие фиксированного меню, если их несколько
	function showDropdownFixed() {
		const fixedMenu = $('.dropdown-fixed-menu');
		const selectBtn = $('.dropdown-select-btn');
		const area = $('.dropdown-select');

		selectBtn.click(function () {
			$(this).siblings(fixedMenu).toggleClass('--active');

			let top = $(this).offset().top + selectBtn.outerHeight();
			let left = $(this).offset().left;
			fixedMenu.css({ top: top + 2 + 'px', left: left - 2 + 'px' });
		});

		$(document).click(function (e) {
			if (!area.is(e.target) && area.has(e.target).length === 0) {
				fixedMenu.removeClass('--active');
			}
		});
	}

	showDropdownFixed();
})(jQuery);
