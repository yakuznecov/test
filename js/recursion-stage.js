// Рекурсия, функция, которая вызывает сама себя, например, факториал числа
// n! = 1*2*3*4...n (произведение всех чисел до n)
// !0 = 1
// n! = (n -1)!*n

// 1-й вариант
// function factorial(n) {
// 	if (n == 0) return 1;
// 	else return factorial(n - 1) * n;
// }

// 2-й вариант
let factorial = (n) => (n == 0 ? 1 : factorial(n - 1) * n);
