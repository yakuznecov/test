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
});
