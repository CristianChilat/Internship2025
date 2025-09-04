let number = 5;

try {
	number = number + 1;

	notExistingFunction();

	console.log(`The new number is ${number}`);
} catch (error) {

	alert(error)
} finally {

	console.log(`The new number is ${number}`);
}