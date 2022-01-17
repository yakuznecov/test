'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Стартовые значения
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Функциональность
btnRoll.addEventListener('click', function () {
	// 1. Генерация случайного числа
	const dice = Math.trunc(Math.random() * 6) + 1;

	// 2. Показать число на экране
	diceEl.classList.remove('hidden');
	diceEl.src = `img/dice-${dice}.png`;

	// Проверка для первой роли
	if (dice !== 1) {
		// бросай кубик на текущий счет
		currentScore += dice;
		current0El.textContent = currentScore; // изменится позже
	} else {
		// переключить на другого игрока
	}
});
