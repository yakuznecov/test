// Sets (наборы) никогда не может быть дубликатов
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']); // могут быть разные типы данных. Дубликаты при log не показываются, только уникальные значения. Порядок элементов не имеет значение. Нет индексов, как в массивах
orderSet.size; // 3
orderSet.has('Pizza'); // есть ли там Pizza? (true)
orderSet.add('Bread'); // добавить элемент
orderSet.delete('Risotto'); // удалить элемент из набора

for (const order of orderSet) console.log(order); // можно перебрать

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Wsiter'];
const staffUnique = [...new Set(staff)]; // выбирает уникальные варианты и распаковать в массив
