function loop1() {
	for (let i = 1; i <= 10; i++) {
		console.log(`hi ${i}`);
	}

	const jonas = ['Jonas', 'Schmedtman', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

	const types = []; // создаем пустой массив, куда заносятся значения

	for (let i = 0; i < jonas.length; i++) {
		console.log(jonas[i]);

		// способ заполнения массива
		types[i] = typeof jonas[i];
		// Еще способ добавления в массив
		types.push(typeof jonas[i]);
	}

	const years = [1991, 2007, 1969, 2020];
	const ages = [];

	for (let i = 0; i < years.length; i++) {
		ages.push(2037 - years[i]);
	}

	// continue and break
	for (let i = 0; i < jonas.length; i++) {
		if (typeof jonas[i] !== 'string') continue; // если тип текущего элемента не явл. строкой, то продолжай.
	}
    // break
    for (let i = 0; i < jonas.length; i++) {
		if (typeof jonas[i] === 'number') break; // немедленный выход из итерации
	}
}
