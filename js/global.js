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
