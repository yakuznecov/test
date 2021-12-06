(function () {
	var tabs_menu = document.getElementsByClassName('tabs-menu');
	for (var k = 0; k < tabs_menu.length; k++) {
		tabs_menu[k].onclick = js_tabs;
	}
	function js_tabs() {
		var tab_id = this.getAttribute('data-target');
		var tabs_panel = document.getElementsByClassName('tabs-panel');

		for (var i = 0; i < tabs_panel.length; i++) {
			tabs_panel[i].style.display = 'none';
		}
		for (var j = 0; j < tabs_menu.length; j++) {
			tabs_menu[j].className = tabs_menu[j].className.replace(' tabs-menu-active', '');
		}
		this.className += ' tabs-menu-active';
		document.getElementById(tab_id).style.display = 'block';
		return false;
	}
})();

// Start: Tabs Profile Actor Foto Video -------------------------------------------------------->
const actorProfileBtnLeft = document.querySelector('.actor__profile-media-tabs-menu.left');
const actorProfileBtnRight = document.querySelector('.actor__profile-media-tabs-menu.right');
const actorProfileActiveBtn = document.querySelector('.actor__profile-media-active-btn');
const actorProfileTabsPanelFirst = document.querySelector('#media-tab_1');
const actorProfileTabsPanelSecond = document.querySelector('#media-tab_2');

actorProfileBtnLeft.addEventListener('click', switchToLeft);

actorProfileBtnRight.addEventListener('click', switchToRight);

function switchToLeft() {
	actorProfileTabsPanelFirst.classList.add('active');
	actorProfileTabsPanelSecond.classList.remove('active');
	actorProfileActiveBtn.style.left = '0%';
}

function switchToRight() {
	actorProfileTabsPanelFirst.classList.remove('active');
	actorProfileTabsPanelSecond.classList.add('active');
	actorProfileActiveBtn.style.left = '50%';
}
