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
