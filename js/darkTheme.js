// Темная тема сайта, переключение, localStorage

const html = document.querySelector('html');
const inputTheme = document.querySelector('.theme__input');
const wrapper = document.querySelector('.wrapper');

document.querySelector('.themeToggle')?.addEventListener('click', () => {
	if (localStorage.getItem('theme') === 'dark') {
		localStorage.removeItem('theme');
	} else {
		localStorage.setItem('theme', 'dark');
	}
	addDarkClassToHtml();
});

function addDarkClassToHtml() {
	try {
		if (localStorage.getItem('theme') === 'dark') {
			html.classList.add('dark');
			inputTheme.checked = true;
			wrapper.classList.remove('hide');
		} else {
			html.classList.remove('dark');
			inputTheme.checked = false;
			wrapper.classList.remove('hide');
		}
	} catch (err) { }
}

addDarkClassToHtml();