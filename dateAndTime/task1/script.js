function curDay (separator) {
	let now = new Date();
	return now.getDate() + separator + now.getMonth() + separator + now.getFullYear();
}

console.log(curDay('/'));