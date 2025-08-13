function timeConvert (minutes) {
	return `${minutes} minutes = ${Math.floor(minutes / 60)} hour(s) and ${minutes % 60} minute(s)`;
}

console.log(timeConvert(200));