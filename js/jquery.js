$(function () {
	$('.rateBtn').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass('active');
	});
});
