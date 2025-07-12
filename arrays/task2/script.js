const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

console.log('1.');

numbers.map(x => x < 5 ? console.log(x) : null);

console.log('2.');

console.log(Math.min(...numbers))
console.log(Math.max(...numbers))

//todo for cycle for simultaneous max and min

console.log('3.');

console.log(numbers.sort((a, b) => b - a));

console.log('4.');

const arrSum = numbers.reduce((a, b) => a + b);
const arrAvg = arrSum / numbers.length;

numbers.map(number => number > arrAvg ? console.log(number) : null)