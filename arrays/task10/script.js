let numbers = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

numbers = [...new Set(numbers)];

numbers.sort((a, b) => a - b);

console.log(numbers);