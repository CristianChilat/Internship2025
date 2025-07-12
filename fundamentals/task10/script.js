const number = 15;

const dividers = (number) => {
	for (let i = number; i >= 0; i--) {
		if (number % i === 0) {
			console.log(i);
		}
	}
}

dividers(number);