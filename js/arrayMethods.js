const myArr = ['hello', 'world', 'cat', 'city'];

// some
console.log(myArr.some((t) => t === 'cat')); // функция внутри этого метода. Для каждого элемента массива будет вызываться переданная нами функция, у которой будет один параметр. А возвращать должна истину или ложь. Есть ли в массиве данное значение? Да.

const books = [
	{ title: 'Война и мир', price: 1000 },
	{ title: 'Ночной дозор', price: 500 },
	{ title: 'Таинственный остров', price: 300 },
	{ title: 'Тарзан', price: 450 },
];

console.log(books.some((book) => book.price > 1000)); // false, есть цена больше тысячи?

// reduce
// нужно, например, перемножить все числа массива

const myNums = [1, 2, 3, 4, 5, 6];
console.log(myNums.reduce((total, value) => total * value)); // результат 720

console.log(myArr.reduce((t, s) => t + ',' + s));


// every
