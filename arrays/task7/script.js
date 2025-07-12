const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function extract(start, end) {
	return numbers.slice(start, end + 1);
}

console.log(extract(2, 4));