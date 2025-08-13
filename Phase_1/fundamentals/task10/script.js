const number = 15;

const dividers = (number) => {
	for (let i = 0; i <= number / 2; i++) {
		if (number % i === 0) {
			console.log(i);
		}
	}
	console.log(number);
}

dividers(number);