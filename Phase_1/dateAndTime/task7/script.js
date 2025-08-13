function addYears (date, years) {
	return new Date(date.setFullYear(date.getFullYear() + years));
}

let dt = new Date();

console.log(addYears(dt, 10));