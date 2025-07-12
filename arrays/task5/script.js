function convert(fn, array) {
	const result = [];

	for (let i = 0; i < array.length; i++) {
		result.push(fn(array[i]));
	}

	return result;
}

const square = (x) => ( x * x);

const numbers = [1, 2, 3, 4];

console.log(convert(square, numbers));
console.log(numbers);
console.log(convert(square, []));