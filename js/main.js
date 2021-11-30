var switchButton = document.querySelector('.switch-button');
var switchBtnRight = document.querySelector('.switch-button-case.right');
var switchBtnLeft = document.querySelector('.switch-button-case.left');
var switchBtnMiddle = document.querySelector('.switch-button-case.middle');
var activeSwitch = document.querySelector('.switch-button .active');

function switchLeft() {
	switchBtnRight.classList.remove('active-case');
	switchBtnMiddle.classList.remove('active-case');
	switchBtnLeft.classList.add('active-case');
	activeSwitch.style.left = '0%';
}

function switchRight() {
	switchBtnRight.classList.add('active-case');
	switchBtnLeft.classList.remove('active-case');
	switchBtnMiddle.classList.remove('active-case');
	activeSwitch.style.left = '33.33333%';
}

function switchMiddle() {
	switchBtnMiddle.classList.add('active-case');
	switchBtnLeft.classList.remove('active-case');
	switchBtnRight.classList.remove('active-case');
	activeSwitch.style.left = '67%';
}

switchBtnLeft.addEventListener(
	'click',
	function () {
		switchLeft();
	},
	false
);

switchBtnMiddle.addEventListener(
	'click',
	function () {
		switchMiddle();
	},
	false
);

switchBtnRight.addEventListener(
	'click',
	function () {
		switchRight();
	},
	false
);

// 4 кнопки с одной активной при переключении
$('.menu-header__info-item').click(function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});

// Иконки приложений
$('.appStore-box')
	.mouseover(function () {
		$('.appStoreDark').show();
	})
	.mouseout(function () {
		$('.appStoreDark').hide();
	});

$('.googlePlay-box')
	.mouseover(function () {
		$('.googlePlayDark').show();
	})
	.mouseout(function () {
		$('.googlePlayDark').hide();
	});

// При нажатии на поле, которе не сайдбар и не кнопка, происходит закрытие сайдбара
document.onclick = function (e) {
	if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
		toggle.classList.remove('active');
		sidebar.classList.remove('active');
	}
};

// Start: Скрытие окна Массовое одобрение актеров при уходе мыши за пределы --------------------------------------------->
$('.dropdown-transfer-actors').mouseleave(function () {
	$(this).removeClass('active');
});

// и на чистом JS
document.querySelector('.dropdown-transfer-actors').addEventListener('mouseleave', (event) => {
	event.target.classList.remove('active');
});

// End: Скрытие окна Массовое одобрение актеров ----------------------------------------------->

// Меняется ссылка в зависимости от выбранного слайда
$('.registration-slider-inner').on('afterChange', function (event, slick, currentSlide) {
	var regBtn = $('.registration-btn');
	var regBtnMobile = $('.mobile-registration-btn');

	if (currentSlide === 0) {
		regBtn.attr('href', 'https://kinolift.com/ru/signup/actor');
		regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/actor');
	}

	if (currentSlide === 1) {
		regBtn.attr('href', 'https://kinolift.com/ru/signup/cd');
		regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/cd');
	}

	if (currentSlide === 2) {
		regBtn.attr('href', 'https://kinolift.com/ru/signup/director');
		regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/director');
	}

	if (currentSlide === 3) {
		regBtn.attr('href', 'https://kinolift.com/ru/signup/producer');
		regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/producer');
	}

	if (currentSlide === 4) {
		regBtn.attr('href', 'https://kinolift.com/ru/signup/agent');
		regBtnMobile.attr('href', 'https://kinolift.com/ru/signup/agent');
	}
});

!(function (n) {
	for (var e, a = document.getElementsByClassName('tabs-menu'), t = 0; t < a.length; t++) a[t].onclick = s;
	function s() {
		for (var e = this.getAttribute('data-target'), t = document.getElementsByClassName('tabs-panel'), n = 0; n < t.length; n++) t[n].style.display = 'none';
		for (var s = 0; s < a.length; s++) a[s].className = a[s].className.replace(' tabs-menu-active', '');
		return (this.className += ' tabs-menu-active'), !(document.getElementById(e).style.display = 'block');
	}
	function o(e, t) {
		n(e)
			.mouseover(function () {
				n(t).addClass('active');
			})
			.mouseout(function () {
				n(t).removeClass('active');
			});
	}
	(e = '.main-header-top-search'),
		n('.main-header-top-search input')
			.focus(function () {
				n(e).addClass('active');
			})
			.focusout(function () {
				n(e).removeClass('active');
			}),
		o('.dropdown-blue-points', '.points-blue-btn-sidebar'),
		o('.dropdown-grey-points', '.points-grey-btn-header'),
		o('.question-menu,  .question-button', '.question-button'),
		o('.language-menu, .language-button', '.language-button'),
		o('.dropdown-request', '.request-btn'),
		o('.dropdown-approved', '.approved-btn'),
		o('.dropdown-mainRole', '.mainRole-dropdown-btn'),
		o('.main-header-top-filter', '.filter-dropdown-btn'),
		o('.sidebar-burger', '.burger-btn'),
		o('.sidebar-dropdown-question', '.sidebar-question-btn'),
		o('.sidebar-dropdown-calendar', '.sidebar-calendar-btn'),
		n('.filter-dropdown-input').click(function () {
			n(this).toggleClass('active');
		}),
		n(function () {
			n('ul.profile-menu-wrapper').on('click', 'li:not(.active)', function () {
				n(this).addClass('active').siblings().removeClass('active').closest('div.profile-menu__tabs').find('div.tabs__content').removeClass('active').eq(n(this).index()).addClass('active');
			});
		}),
		n('.castings-menu-agent, .promo-menu-actors, .castings-menu, .promo-menu').on('mouseover', function () {
			n(this).siblings().addClass('active');
		}),
		n('.castings-menu-agent, .promo-menu-actors, .castings-menu, .promo-menu').on('mouseout', function () {
			n(this).siblings().removeClass('active');
		}),
		n('.menu-header__info-item').click(function () {
			n(this).siblings().removeClass('active'), n(this).addClass('active');
		}),
		n('.castings-menu-item.hasMenu').click(function () {
			n('.menu-header__info').addClass('active');
		}),
		n('.menu-header__bottom-list .hasMenu').click(function () {
			n('.menu-header__info').addClass('active');
		});
	const i = n('.burger__menu-wrapper'),
		c = n('.burger__menu-btn'),
		r = n('.menu-header');
	c.on('click', (e) => {
		e.stopPropagation(), c.toggleClass('burger__menu-btn_active'), i.toggleClass('active'), l.removeClass('active'), m.removeClass('active');
	});
	const l = n('.language-menu-mobile'),
		u = n('.language-btn-mobile');
	u.on('click', (e) => {
		e.stopPropagation(), l.toggleClass('active'), m.removeClass('active');
	}),
		r.on('click', (e) => {
			e.target.closest('.language-menu-mobile') || l.removeClass('active');
		});
	const d = n('.question-btn-mobile'),
		m = n('.question-menu-mobile');
	d.on('click', (e) => {
		e.stopPropagation(), m.toggleClass('active'), l.removeClass('active');
	}),
		r.on('click', (e) => {
			e.target.closest('.question-menu-mobile') || m.removeClass('active');
		}),
		n('.hidden-btn').click(function (e) {
			c.toggleClass('burger__menu-btn_active'), e.stopPropagation(), i.toggleClass('active'), m.removeClass('active'), l.removeClass('active');
		}),
		n('.dropdown-language').each(function () {
			n(this)
				.find('.language-options')
				.on('click', function () {
					n('.dropdown-language > .language-button span').html(n(this).html());
				});
		});
	document.querySelector('.switch-button-loc');
	var g = document.querySelector('.switch-button-case-loc.right'),
		v = document.querySelector('.switch-button-case-loc.left'),
		b = document.querySelector('.switch-button-loc .active');
	v.addEventListener(
		'click',
		function () {
			g.classList.remove('active-case'), v.classList.add('active-case'), (b.style.left = '0%');
		},
		!1
	),
		g.addEventListener(
			'click',
			function () {
				g.classList.add('active-case'), v.classList.remove('active-case'), (b.style.left = '50%');
			},
			!1
		);
	document.querySelector('.switch-button');
	var p = document.querySelector('.switch-button-case.right'),
		h = document.querySelector('.switch-button-case.left'),
		f = document.querySelector('.switch-button-case.middle'),
		y = document.querySelector('.switch-button .active');
	h.addEventListener(
		'click',
		function () {
			p.classList.remove('active-case'), f.classList.remove('active-case'), h.classList.add('active-case'), (y.style.left = '0%');
		},
		!1
	),
		f.addEventListener(
			'click',
			function () {
				f.classList.add('active-case'), h.classList.remove('active-case'), p.classList.remove('active-case'), (y.style.left = '67%');
			},
			!1
		),
		p.addEventListener(
			'click',
			function () {
				p.classList.add('active-case'), h.classList.remove('active-case'), f.classList.remove('active-case'), (y.style.left = '33.33333%');
			},
			!1
		);
	function q() {
		'rangeOne' === this.getAttribute('name') ? ((C.innerHTML = this.value), (C.style.left = (this.value / this.getAttribute('max')) * 96.5 + '%')) : ((S.style.left = (this.value / this.getAttribute('max')) * 96.5 + '%'), (S.innerHTML = this.value)), parseInt(w.value) > parseInt(L.value) ? ((k.style.width = ((w.value - L.value) / this.getAttribute('max')) * 100 + '%'), (k.style.left = (L.value / this.getAttribute('max')) * 100 + '%')) : ((k.style.width = ((L.value - w.value) / this.getAttribute('max')) * 100 + '%'), (k.style.left = (w.value / this.getAttribute('max')) * 100 + '%'));
	}
	var w = document.querySelector('input[name="rangeOne"]'),
		L = document.querySelector('input[name="rangeTwo"]'),
		C = document.querySelector('.outputOne'),
		S = document.querySelector('.outputTwo'),
		k = document.querySelector('.incl-range');
	document.addEventListener('DOMContentLoaded', function () {
		q.call(w),
			q.call(L),
			n('input[type="range"]')
				.on('mouseup', function () {
					this.blur();
				})
				.on('mousedown input', function () {
					q.call(this);
				});
	});
	function _() {
		'rangeTransferOne' === this.getAttribute('name') && ((E.innerHTML = this.value), (E.style.left = (this.value / this.getAttribute('max')) * 96.5 + '%')), parseInt(A.value) && (x.style.width = (A.value / this.getAttribute('max')) * 100 + '%');
	}
	var A = document.querySelector('input[name="rangeTransferOne"]'),
		E = document.querySelector('.outputTransferOne'),
		x = document.querySelector('.transfer-incl-range');
	document.addEventListener('DOMContentLoaded', function () {
		_.call(A),
			n('input[type="range"]')
				.on('mouseup', function () {
					this.blur();
				})
				.on('mousedown input', function () {
					_.call(this);
				});
	});
	const T = document.querySelector('.request-js'),
		N = document.querySelector('.main__item');
	T.addEventListener('click', () => {
		N.classList.toggle('--expand');
	});
	const O = document.querySelector('.roll-up-btn'),
		M = document.querySelector('.sidebar'),
		j = document.querySelector('.sidebar-tabs-js'),
		I = document.querySelector('.sidebar-dropdown-header-title'),
		B = document.querySelector('.sidebar-burger'),
		P = document.querySelector('.sidebar-plus'),
		H = document.querySelector('.sidebar-dropdown-question .sidebar-header-btn'),
		D = document.querySelector('.sidebar-dropdown-calendar .sidebar-header-btn');
	O.addEventListener('click', function () {
		setTimeout(function () {
			j.classList.toggle('done'),
				I.classList.toggle('done'),
				B.classList.toggle('done'),
				P.classList.toggle('done'),
				H.classList.toggle('white-btn-48'),
				H.classList.toggle('sidebar-question-btn'),
				D.classList.toggle('white-btn-48'),
				D.classList.toggle('sidebar-calendar-btn'),
				setTimeout(function () {
					j.classList.toggle('hide'), I.classList.toggle('hide');
				}, 200);
		}, 300),
			setTimeout(function () {
				M.classList.toggle('--rolled');
			}, 300);
	}),
		(function () {
			let n = document.querySelectorAll('.transfer-actors-tabs-menu');
			for (let e = 0; e < n.length; e++) n[e].onclick = t;
			function t() {
				var e = this.getAttribute('data-target');
				let t = document.querySelectorAll('.transfer-actors-tabs-panel');
				for (let e = 0; e < t.length; e++) t[e].style.display = 'none';
				for (let e = 0; e < n.length; e++) n[e].className = n[e].className.replace(' transfer-actors-active', '');
				return (this.className += ' transfer-actors-active'), !(document.getElementById(e).style.display = 'block');
			}
		})(),
		n('.dropdown-text-js').click(function () {
			n('.dropdown-transfer-actors').addClass('active');
		}),
		n('.transfer-actors-close-btn').click(function () {
			n('.dropdown-transfer-actors').removeClass('active');
		}),
		n(window).width() < 1281 ? n('.input-top-search-js').attr('placeholder', 'Актёры') : n('.input-top-search-js').attr('placeholder', 'Актёры в этом кастинге'),
		n('.main-header-top-search').click(function () {
			n('.main-header-top-search').addClass('transform'), n('.send-invitation-btn').addClass('active');
		});
})(jQuery);
