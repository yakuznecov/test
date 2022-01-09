const spoilerItemHeaders = document.querySelectorAll('.spoiler-item-header');

spoilerItemHeaders.forEach((spoilerItemHeader) => {
	spoilerItemHeader.addEventListener('click', (event) => {
		const spoilerItem = spoilerItemHeader.parentNode;
		spoilerItem.classList.toggle('active');
		spoilerItemHeader.classList.toggle('active');
		const spoilerItemBody = spoilerItemHeader.nextElementSibling;

		if (spoilerItemHeader.classList.contains('active')) {
			spoilerItemBody.style.maxHeight = spoilerItemBody.scrollHeight + 'px';
		} else {
			spoilerItemBody.style.maxHeight = 0;
		}
	});
});

$(function () {
	$('.spoiler-box-header').click(function () {
		$(this).next('.spoiler-box-body').slideToggle();
	});
});

// Универсальная функция для любого кол-ва кнопок
$(document).ready(function () {
	$('.switch__wrapper').each(function () {
		const switchItem = $(this).find('.switch__item');
		const switchSlider = $(this).find('.switch__slider');
		const switchItemsCount = switchItem.length;
		const step = switchItemsCount && 100 / switchItemsCount;

		switchItem.css('width', `${step}%`);
		switchSlider.css('width', `${step}%`);

		$(this).click(function (e) {
			const targetIndex = $(e.target.closest('.switch__item')).data('index');
			switchSlider.css('left', `${step * targetIndex}%`);
		});
	});
});
