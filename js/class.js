// Class

class Comment {
	constructor(text) {
		// это метод
		this.text = text; // this указывает на экземпляр класса, добавляем свойство text, которое пришло в параметре
		this.votesQty = 0; // начальное значение количества комментариев
	}

	upvote() {
		// это метод, увеличение на единицу кол-ва комментариев
		this.votesQty += 1;
	}

	static mergeComments(first, second) {
		return `${first} ${second}`;
	}
}

const firstComment = new Comment('First comment'); // такая функция конструктор вернет новый объект

firstComment instanceof Comment; // true
firstComment instanceof Object; // true

firstComment.upvote(); // вызов данного метода

firstComment.hasOwnProperty('text'); // проверка наличия собственного свойства в объекте

Comment.mergeComments('First comment.', 'Second comment.'); // метод доступен как свойство класса и не наследуется экземплярами класса. Это статический метод

// Расширение других классов

class NumbersArray extends Array {
	// расширение дефолтного класса Array, будет доступно всем массивам. Родительский конструктор вызовется автоматически.
	sum() {
		return this.reduce((el, acc) => (acc += el), 0); // метод массива (0 - это начальное значение acc - аккумулятора ) и каждому элементу добавляется число
	}
}

const myArray = new NumbersArray(2, 5, 7); // создаем экземпляр класса array (создание массива)
myArray.sum(); // все элементы будут просуммированы
