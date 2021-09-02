// Вывод времени в unix формате
function unixTime() {
	let time = Math.floor(new Date().getTime());
	console.log(time);
}

unixTime();

// Вывод случайного числа
function randomInt() {
	const min = 100;
	const max = 200;
	let rand = Math.floor(min + Math.random() * (max + 1 - min));
	console.log(rand);
}

randomInt();

//   Переменная внутри функции и увеличивается только 1 раз
function count() {
	let c = 9;
	c++;
	console.log(c);
}

count();

// Переменная вынесена за пределы функции и увеличивается каждый раз на единицу
let a = 9;

function count2() {
	a++;
	console.log(a);
}

count2();
count2();
count2();

// Увеличение блока при наведении мышки
// document.querySelector('.out-1').addEventListener('mousemove', blockWidth); /* имя функции без скобок */

let w = 100;

function blockWidth() {
	w++;
	document.querySelector('.out-1').style.width = w + 'px';
}

// АРГУМЕНТЫ

function sum(a1, b1) {
	console.log(a1 + b1);
}

sum(44, 11);
let z = 77;
sum(z, 10);

function showSum(elem, x, y) {
	document.querySelector(elem).textContent = x + y;
}
