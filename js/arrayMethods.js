const myArr = ['hello', 'world', 'cat', 'city'];

// some
console.log(myArr.some((t) => t === 'cat')); // функция внутри этого метода. Для каждого элемента массива будет вызываться переданная нами функция, у которой будет один параметр. А возвращать должна истину или ложь. Есть ли в массиве данное значение? Да.

const books = [
	{ title: 'Война и мир', price: 1000 },
	{ title: 'Ночной дозор', price: 600 },
	{ title: 'Таинственный остров', price: 300 },
	{ title: 'Тарзан', price: 450 },
];

console.log(books.some((book) => book.price > 1000)); // false, есть цена больше тысячи?

// reduce
// нужно, например, перемножить все числа массива

const myNums = [1, 2, 3, 4, 5, 6];
console.log(myNums.reduce((total, value) => total * value)); // результат 720

console.log(myArr.reduce((t, s) => t + ',' + s));

// Сложить массивы
const sumCountersOfAppearance = (...counters) => {
	return [].concat(...counters).reduce((a, b) => a + b, 0);
};

// every
// возвращает истину, если все элементы массива удовлетворяют одному условию

console.log(myArr.every((s) => s.length >= 3));

// map

console.log(books.map((book) => book.price)); // получаем отдельно только массив с ценами

let sum = books.map((book) => book.price).reduce((t, p) => t + p); // сначала собираем цены из массива, а потом складываем их с помощью reduce.

console.log(sum);

// flat
// когда элементами массива являются другие массивы
// нужно сложить цифры из массивов

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
];

console.log(matrix);
console.log(matrix.flat()); // превращение в одномерный массив
console.log(matrix.flat().reduce((t, p) => t + p));

// filter
// убирает элементы, которые не удовлетворяют некоему условию. Фактически создает новый массив, копируя в него элементы исходного массива, но только те, которые удовлетворяют определенному предикату. Например, нужно получить массив книг со стоимостью не менее 500

// вариант с перебором
let booksOver500 = [];
for (let i = 0; i < books.length; i++) if (books[i].price > 500) booksOver500.push(books[i]);

console.log(booksOver500);

// вариант с filter
console.log(books.filter((book) => book.price > 500));

// Метод forEach
// действие для каждого элемента массива

books.forEach((book) => console.log(`${book.title} : ${book.price}`));

books
	.filter((book) => book.price < 500)
	.map((book) => `${book.title} : ${book.price}`)
	.forEach((s) => console.log(s));

// Функция findIndex
// предикат в качестве параметра (истина или ложь для каждого элемента) и возвращает индекс найденного элемента. Если не нашла, то возвращает -1

console.log(myArr.findIndex((s) => s === 'cat')); // индекс элемента будет 2

// Функция find

console.log(books.find((t) => t.price === 1000)); // вернул объект книги с ценой 1000

// метод sort
// является частью функционального api массивов js

console.log(books.sort((b1, b2) => b1.price - b2.price)); // переставляет элементы в существующем массиве по убыванию в данном случае

// сортируем книги по названию по алфавиту
books
	.filter((book) => book.price > 500)
	.sort((b1, b2) => (b1.title > b2.title ? 1 : -1))
	.map((book) => `${book.title} : ${book.price}`)
	.forEach((s) => console.log(s));

// функция concat, которая объединяет несколько массивов в 1
const myNums2 = [7, 8, 9];
const myNums3 = myNums.concat(myNums2);
console.log(myNums3);

// метод fill
// указывается в методе 3 параметра. 1-й - чем заполняем, 2 - индекс начального, 3 - индекс элемента, до которого происходит заполнение, не включая последний

myNums.fill(0, 1, 4);
console.log(myNums);

// includes (присутствует ли элемент в массиве)
console.log(myNums.includes(5));

// reverse (меняет существующие элементы)
myNums.reverse();
console.log(myNums);

// flatMap (объединение 2-х методов: flat и map) (только сначала выполняется map, а потом flat)
console.log(books.map((b) => [b.price]).flat());
console.log(books.flatMap((b) => [b.price])); // более короткий вариант

const links = [
	{ title: 'Specialist', href: 'https://www.specialist.ru', clicks: 0 },
	{ title: 'Yandex', href: 'https://www.yandex.ru', clicks: 0 },
	{ title: 'Google', href: 'https://www.google.ru', clicks: 0 },
	{ title: 'Consultant', href: 'https://www.consultant.ru', clicks: 0 },
	{ title: 'Garant', href: 'https://www.garant.ru', clicks: 0 },
	{ title: 'Mail', href: 'https://www.mail.ru', clicks: 0 },
];

// заполнить clicks случайным числом
links.forEach((l) => (l.clicks = Math.round(Math.random() ** 99) + 1));
// фильтруем те, у которых больше либо равно 50 и далее сортируем и преобразовываем в строку
links
	.filter((l) => l.clicks >= 50)
	.sort((l1, l2) => l2.clicks - l1.clicks)
	.map((l) => `<a href='${l.href}'>${l.title} (${l.clicks})</a>`);

let renderLinks = function () {
	document.write(
		links
			.filter((l) => l.clicks >= 50)
			.sort((l1, l2) => l2.clicks - l1.clicks)
			.map((l) => `<a href='${l.href}'>${l.title} (${l.clicks})</a>`)
			.join('')
	);
}

let demoLinks = document.getElementById('demoLinks');

demoLinks.textContent = renderLinks();









