$(function () {
	$('.rateBtn.--lite, .rateBtn.--pro, .rateBtn.--vip').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass('active');
	});
});
