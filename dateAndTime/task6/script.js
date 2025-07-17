function ageOfPerson(birthDay) {
	let todayDate = new Date();
	let ageYears = todayDate.getFullYear() - birthDay.getFullYear();
	let ageMonths = ageYears * 12 + todayDate.getMonth() - birthDay.getMonth() + 1;
	let ageDays = ageMonths * 30 + todayDate.getDate() - birthDay.getDate() + 1;
	return {
		years: ageYears,
		months: ageMonths,
		days: ageDays
	}
}

console.log(ageOfPerson(new Date(2006, 3, 29)));