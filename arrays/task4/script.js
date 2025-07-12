function sumInputNumbers() {
	const numbers = []
	let number;

	do {
		number = prompt("Enter a number")?.trim();

		if (isNaN(number) || number == null) {
			break;
		}

		numbers.push(Number(number));
	} while (true)

	return numbers.reduce((a, b) => a + b);
}

console.log(sumInputNumbers());