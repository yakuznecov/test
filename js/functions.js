// Работа с функциями, выход на пенсию

const calcAge = function (birthYear) {
	return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired`);
		return -1;
	}
};

yearsUntilRetirement(1991, 'Jonas'); // Jonas retires in 19 years, 19
yearsUntilRetirement(1950, 'Mike'); // Mike has already retired, -1

// Задача по функциям

// Вычисляем среднее значение любых трех чисел
const calcAverage = (a, b, c) => (a + b + c) / 3; // значение автоматически возвращается

// Расчет среднего значения для обеих команд
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
	} else {
		console.log('No team wins...');
	}
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111); // тогда дельфины выиграют


// Js Stage 2

