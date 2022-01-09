const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtman',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLicense: true,

	// calcAge: function (birthYear) {
	//     return 2037 - birthYear;
	// } // любая функция, прикрепленная к объекту, называется методом

	// calcAge: function () {
	//     return 2037 - this.birthYear;
	// }

	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
	},
};

jonas.calcAge(); // получить доступ к функции

jonas.age; // доступ к возрасту

jonas.getSummary();

const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

mark.calcBMI(); // сначала вычисляем значение
john.calcBMI();
console.log(mark.bmi); // 27.30
console.log(john.bmi); // 24.19
