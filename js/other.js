// The nullish Coalescing Operator (нулевой оператор слияния)
const guestCorrect = restaurant.numGuests ?? 10; // если первое значение равно нулю или непоределенности, то по умолчанию возврат второго значения

// Logical Assignment Operators (операторы логического присваивания 2021)
const rest1 = {
	name: 'Capri',
	numGuests: 20,
};

const rest2 = {
	name: 'La Piazza',
	owner: 'Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ??= 10; // новый оператор присваивания, более компактный вариант
rest2.numGuests ??= 10; // первая переменная неопределена, поэтому будет присвоено 10

// rest2.owner = rest2.owner && 'Anonim';
rest2.owner &&= 'Anonim'; // более короткая запись верхней строчки

console.log(rest1); // {name: 'Capri', numGuests: 20}
console.log(rest2); // {name: 'La Piazza', owner: 'Rossi', numGuests: 10}
