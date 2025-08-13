let numbers = [1, 2, 3, 4, 5];

for(let i  = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

console.log("======================");

let i = 0;

while(i < numbers.length) {
	console.log(numbers[i]);
	i++;
}

console.log("======================");

i = 0;

do {
	console.log(numbers[i]);
	i++
} while(i < numbers.length)

console.log("======================");

for(const number of numbers) {
	console.log(number);
}

console.log("======================");

for (const number in numbers) {
	console.log(numbers);
}

console.log("======================");

numbers.forEach(number => console.log(number));

console.log("======================");

numbers.map(number => console.log(number));