function sayHello(name, age) {
	if (age) console.log(`Hello, ${name} - ${age}!`);
	else console.log(`Hello, ${name}!`);
}

function saySomething() {
	console.log('Something');
	console.log(arguments);
}

function funcWithRestParams(name, age, ...restParams) {
	console.log(`Hello from Rest params func, ${name} - ${age}!`);
	for (let i = 0; i < restParams.length; i++) console.log('\t' + restParams[i]);
}

let square = (x) => x * x; // arrow function

let nums = [56, 11, 3, 9, 73, 5, 1];
console.log(nums.join()); // вывод элементов массива

nums.sort((a, b) => a - b);
console.log(nums.join()); // сортирует по возрастанию

nums.sort((a, b) => b - a);
console.log(nums.join()); // сортирует по убыванию

function showBook() {
	console.log(`${this.title} - ${this.price}`);
	console.log(this);
}

function Book(title, price) {
	this.title = title;
	this.price = price;
	console.log('Book here');
	console.log(this);

	this.show = showBook;
}

let car = { title: 'Kia', price: 23000 };

let b1 = new Book('Война и мир', 1000); // this === b1
b1.show(); // this === b1
// showBook(); // вызывается глобальный объект window
// showBook.call(b1); // this === b1 однократный вызов нужной функции с объектом this, разница в apply в синтаксисе передачи параметров
// showBook.apply(b1, [20]); // this === b1
// showBook.call(car); // this === car
let showCar = showBook.bind(car);
showBook(); // this === Window (global)
showCar(); // this === car