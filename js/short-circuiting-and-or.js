// Короткое замыкание
console.log(3 || 'Sochi'); // 3
console.log('' || 'Sochi'); // Sochi
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello (возврат первого истинного значения)

const guest = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest); // 10 (потому что свойства не существует и 10 выходит по умолчанию)

console.log(0 && 'Sochi'); // 0
console.log(7 && 'Sochi'); // Sochi (возврат последнего значения, если верны все варианты)
console.log('hello' && 23 && null && 'Sochi'); // null (первое ложное значение)

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
