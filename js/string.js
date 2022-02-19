'a+very+nice+string'.split('+'); // ['a', 'very', 'nice', 'string']
'very nice'.split(' '); // ['very', 'nice']

const [firstName, lastName] = 'Very Nice'.split(' '); // присваиваются переменные

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // Mr. Very Nice

// Функция, которая ставит первую букву слова заглавной
const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1))
        namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // такой же результат, как и выше
    }
    namesUpper.join(' ');
};

capitalizeName('jessica ann smith davis'); // первые заглавные будут

const message = 'Go to gate 23!';
message.padStart(25, '+').padEnd(30, '+'); // общая длина строки будет 25 и в начале будут стоять плюсы, а после строки 5 плюсов

// Маскировка номера кредитной карты
const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*'); // видно будет только 4 последние цифры
}

maskCreditCard(4254545484545478);