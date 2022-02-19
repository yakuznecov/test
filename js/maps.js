const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, 'We are closed');

rest.get('name'); // извлечение по ключу
rest.get(true);

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));

rest.has('categories'); // true
rest.delete(2);
rest.size; // 7
rest.clear(); // очистка элементов

const arr = [1, 2];
rest.set(arr, 'Test');
rest.get(arr); // Test

const question = new Map([
	['question', 'What is the best programming language in the world?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'javaScript'],
	['correct', 3],
	[true, 'Correct'],
	[false, 'Try again'],
]);

// преобразование объекта в карту
const hoursMap = new Map(Object.entries(openingHours));

for (const [key, value] of question) {
	if (typeof key === 'number') {
		console.log(`Answer ${key}: ${value}`); // первые 3 варианта с цифрами в качестве ключа
	}
}

// преобразование карты в массив
[...question];

const gameEvents = new Map([
	[17, 'GOAL'],
	[36, 'Substitution'],
	[47, 'GOAL'],
	[61, 'Substitution'],
	[64, 'Yellow card'],
	[69, 'Red card'],
	[70, 'Substitution'],
	[72, 'Substitution'],
	[76, 'GOAL'],
	[80, 'GOAL'],
	[92, 'Yellow card'],
]);
