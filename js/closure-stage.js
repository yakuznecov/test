// Замыкание

function calc(x) {
	let y = x * x;

	// 2. Добавляем еще одну функцию
	let inc = function() {
		y += 2; // прибавление 2 к результату y
	}

	let print = function() {
		console.log(`y = ${y}`);
	}
	// 1. внутри вложенной функции мы можем работать с локальной переменной внешней функции. Это и есть замыкание

	print(); // печать текущего значения 16
	inc(); // 18
	print(); // 18
}