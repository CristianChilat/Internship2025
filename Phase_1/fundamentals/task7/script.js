const age = 15;

if (age <= 14 || age >= 90) {
	console.log("The age is not between 14 and 90 years");
}

if (!(age >= 14 && age <= 90)) {
	console.log("The age is not between 14 and 90 years!");
}