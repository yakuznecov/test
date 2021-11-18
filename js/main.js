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
