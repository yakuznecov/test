'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // случайное число до 20 включительно
let score = 20; // начальное значение счётчика
let highscore = 0; // высокий балл

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
	document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
	document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	// если в поле ввода не число, выводим сообщение
	if (!guess) {
		displayMessage('Не число!');
	} else if (guess === secretNumber) {
		displayMessage('Верный номер!');
		displayNumber(secretNumber);
		document.querySelector('body').style.backgroundColor = '#60b347';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? 'Много!' : 'Мало!');
			score--;
			displayScore(score);
		} else {
			displayMessage('Вы проиграли!');
			displayScore('0');
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1; // переназначить секретный номер

	displayMessage('Проверка начата...');
	displayScore(score);
	displayNumber('?');
	document.querySelector('.guess').value = '';

	document.querySelector('body').style.backgroundColor = '#fff';
});
