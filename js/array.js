// Массивы

const myArray = [1, 2, 3];
myArray.push(4); // добавление элемента в конец массива
myArray.pop(); // удаление элемента в конце массива. Он также возвращает удаленный элемент
myArray.unshift(true); // добавляет элемент в начало массива
myArray.shift(); // удаляет первый элемент в массиве
myArray.forEach((el) => console.log(el * 2)); // перебор всех элементов массива и вызов функции для каждого из них (3 раза) Оригинальный массив не меняется при этом.

const newArray = myArray.map((el) => el * 3); // неявно возвращает после перебора значение каждого элемента, исходя из результатов колбэк функции

const newArray = myArray.map((el) => {
	return el * 3;
}); // явно возвращает результат функции

const newArray = myArray.map(function (el) {
	return el * 3;
}); // явно возвращает результат функции, результат будет тем же, что и выше, только иная запись функции

console.log(newArray); // [3, 6, 9]

const removedElement = myArray.pop(); // в переменную помещается последний удаленный элемент массива

// Задача про чаевыем -------------------------------------------------------------------------------

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44]; // различные счета
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; // смотрим на чаевые
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Деструктурирование массива

const restaurant = {
	name: 'Classico Italiano',
	location: 'Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // open 24 hours
			close: 24,
		},
	},

	order(starterIndex, mainindex) {
		// сразу можем писать функцию без ключевого слова
		return [this.starterMenu[starterIndex], this.mainMenu[mainindex]];
	},

	orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
	},

	orderPizza: function (mainIngredient, ...otherIngredient) {},
};

restaurant.orderDelivery({
	time: '22:30',
	address: 'Sochi',
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	address: 'Sochi',
	starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant; // замена названий переменных

// Значения по умолчанию
const { menu = [], starterMenu: starters = [] } = restaurant; // применение значения по умолчанию, если его нет в объекте

// Мутация переменных
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // перезаписали 2 начальные переменные

// Вложенные объекты, структурирование
const {
	fri: { open: o, close: c },
} = openingHours; // {open: 11, close: 23}

// ------------------------------------------------------------- ->
const arr = [2, 3, 4];

const [a, b, c] = arr; // элементы массива присваиваются этим переменным (разрушение массива)

const [first, , second] = restaurant.categories; // log: Italian Vegetarian (второй элемент будет пропущен)

[main, secondary] = [secondary, main]; // переназначение переменных

const [starter, mainCourse] = restaurant.order(2, 0); // Garlic Bread Pizza

const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested; // 2 [5, 6]
const [i, , [j, k]] = nested; // 2 5 6

const [p = 1, q = 1, r = 1] = [8, 9]; // можно установить начальные значения

// Spread Operator --------------------------------->
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]; // [1, 2, 7, 8, 9]; как будто вынули элементы и записали вручную

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // добавился элемент в массив

// копирование массива
const mainMenuCopy = [...restaurant.mainMenu];

// объединение 2-х массивов
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Итерирование массива
const str = 'jonas';
const letters = [...str, ' ', 'S.']; // ['J', 'o', 'n', 'a', 's', ' ', 'S.']

const ingredients = [prompt('Ингредиент 1'), prompt('Ингредиент 2'), prompt('Ингредиент 3')];

restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Mike' };

// Start: Rest pattern and Parameters (для упаковки элементов в массив) --------------------------------->

// spread
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

const { sat, ...weekdays } = restaurant.openingHours;

const add = function (...numbers) {
	console.log(numbers); // [2, 3] и т.д.
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
	console.log(sum); // 5 17
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // будет mushrooms и ниже массив 3-х элементов [onion, olives, spinach]
// End: Rest --------------------------------->

// Start: Циклические массивы цикл for --------------------------------->
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu);

// получить элемент с индексом
for (const [i, el] of menu.entries()) {
	console.log(`${i + 1}: ${el}`);
}
// End: Циклические массивы --------------------------------->

// Start: Дополнительная (необязательная цепочка) цепочка --------------------------------->
console.log(restaurant.openingHours.mon?.open); // если понедельник существует, что свойство open будет прочитано (предотвращает возникновение всевозможных ошибок)
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
	const open = restaurant.openingHours[day]?.open ?? 'closed';
	console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // если метода не существует, он выдаст сообщение
// End: Дополнительная цепочка --------------------------------->

// Ключи объектов
const properties = Object.keys(openingHours); // будет массив из трех дней недели
let openStr = `We are open on ${properties.length} days: `; // We are open on 3 days

for (const day of properties) {
	// console.log(day); // thu fri sat (ключи объектов получаем)
	openStr += `${day}, `;
}
console.log(openStr); // We are open on 3 days: thu, fri, sat

// Значения объекта
const values = Object.values(openingHours);

const entries = Object.entries(openingHours); // перебор всего объекта

for (const [day, { open, close }] of entries) {
	console.log(`On ${day} we open at ${open} and close at ${close}`);
}
