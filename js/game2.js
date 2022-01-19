'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Стартовые значения
const init = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;

	diceEl.classList.add('hidden');
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.add('player--active');
	player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
	document.querySelector(`#current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
};

// Функциональность
btnRoll.addEventListener('click', function () {
	if (playing) {
		// 1. Генерация случайного числа
		const dice = Math.trunc(Math.random() * 6) + 1;

		// 2. Показать число на экране
		diceEl.classList.remove('hidden');
		diceEl.src = `img/dice-${dice}.png`;

		// Проверка для первой роли
		if (dice !== 1) {
			// бросай кубик на текущий счет
			currentScore += dice;
			document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
		} else {
			// переключить на другого игрока
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', function () {
	if (playing) {
		// 1. Добавь текущий счет к счёту активного игрока
		scores[activePlayer] += currentScore;
		document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

		// 2. Проверь, если счет игрока >= 100
		if (scores[activePlayer] >= 100) {
			// Если так, заканчивай игру
			playing = false;
			diceEl.classList.add('hidden');
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		} else {
			// Если нет, переключи к следующему игроку
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', init);
