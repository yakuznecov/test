// Start: Реализуйте функцию checkBrackets, которая должна проверять правильность расположения скобок в строке. (скобки)
/* Создайте функцию, которая принимает строку, состоящую из скобок, и возвращает true, если все скобки закрыты правильно.

Примеры:
 "()"              =>  true
 ")(()))"          =>  false
 "("               =>  false
 "(())((()())())"  =>  true */
// сложное решение
const checkBrackets = (str) => !str.split('').reduce((acc, curr) => (!acc ? curr : '[]{}()'.includes(acc.slice(-1)[0] + curr) ? acc.substring(0, acc.length - 1) : acc + curr), '');

// Start: Решение Александра
const str = ')(()))';

function findPairs(str) {
	// создаем копию с уже замененной подстрокой. то есть у нас есть как оригинальная строка, так и копия, ток она возможно уже будет короче
	let copyStr = str.replace('()', '');

	if (copyStr.length > 0 && copyStr.length === str.length) {
		// если после обрезки у нас длина копии равна длине str, то получается обрезка получилась неудачно, то есть че то в строке есть, но это не пара. значит сразу говорим false
		return false;
	} else if (copyStr.length === 0) {
		// иначе если после обрезки осталась пустая строка, то получается что в ней были пары и мы их вырезали и осталась пустая строка. это хорошо. вернем true
		return true;
	} else {
		// как ток изменилась длина строки copyStr, то меняем строку str, у нее ж тоже получается
		str = copyStr;
		// здесь просто надо уловить, что мы из копии вырезали скобки аж целую пару. длина копии != длине оригинала. значит еще раз ищем пару в копии. до тех пор, пока не дойдем в первый или второй if
		return findPairs(str);
	}
}

// console.log(findPairs(str));
// End: Решение Александра

// End: Реализуйте функцию checkBrackets

// Start: Определить диапазон температур термометра за один день и вычислить амплитуду температуры
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]; // Массив температур

// Понимание проблемы-1:
// Что такое амплитуда? Это разница между самой высокой и самой низкой температурой в массиве.
// Как вычислить максимальную и минимальную температуру?
// Что такое ошибка датчика и что делать, когда она возникает?

// Разбить на мелкие проблемы:
// Как игнорировать ошибки?
// Найти макс значение
// Найти минимальное значение
// Разницу между минимальной и максимальной и верни это

const calcTempAmplitude = function (temps) {
	let max = temps[0]; // предположим, что первое значение максимальное
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue; // игнорирование ошибки

		if (curTemp > max) max = curTemp; // ищем максимальное значение
		if (curTemp < min) min = curTemp; // ищем минимальное значение
	}
	// console.log(max, min);
	return max - min;
};

// calcTempAmplitude([3, 7, 4]);
const amplitude = calcTempAmplitude(temperatures); // результат в переменную
// console.log(amplitude); // 23

// Проблема 2
// Функция должна получать 2 массива температур
// Нужно ли для 2-х массивов организовать одну функциональность? НЕТ.
// Нужно объединить 2 массива, как это сделать?
// Функция получает 2 массива температур
const calcTempAmplitudeNew = function (t1, t2) {
	const temps = t1.concat(t2);

	let max = temps[0]; // предположим, что первое значение максимальное
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue; // игнорирование ошибки

		if (curTemp > max) max = curTemp; // ищем максимальное значение
		if (curTemp < min) min = curTemp; // ищем минимальное значение
	}
	// console.log(max, min);
	return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);
// End: Определить диапазон температур термометра за один день и вычисли амплитуду температуры

const measureKelvin = function () {
	const measurement = {
		type: 'temp',
		unit: 'celsium',
		value: 10,
		// value: Number(prompt('Degrees celsium:')), // всегда возвращается строка без метода Number, а так мы преобразуем в число
	};

	const kelvin = measurement.value + 273;
	return kelvin;
};

// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += `${arr[i]}C in ${i + 1} days ... `;
	}
	console.log('...' + str);
};

printForecast(data1);

// Задача ставки на спорт
const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
		['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// Структурирование исходного массива по задаче выше
const [players1, players2] = game.players; // переменные для 2-х массивов

const [gk, ...fieldPlayers] = players1; // первый вратарь и второй массив игроков

// создание всех игроков
const allPlayers = [...players1, ...players2]; // все 22 элемента будут в массиве

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const {
	odds: { team1, x: draw, team2 },
} = game;

const printGoals = function (...players) {
	console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'lewandowski', 'Kimmich');
