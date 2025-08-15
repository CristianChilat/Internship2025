function validateNumber(number) {
	return !(isNaN(number) || number === null || number === "");

}

function sumInputNumbers() {
	const numbers = []
	let number;

	do {
		number = prompt("Enter a number")?.trim();

		numbers.push(Number(number));
	} while (validateNumber(number));

	return numbers.reduce((a, b) => a + b);
}

console.log(sumInputNumbers());