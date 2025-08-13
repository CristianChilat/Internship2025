const weekDays = {
	'Luni': 'Mo',
	'Marti': 'Tu',
	'Miercuri': 'We',
	'Joi': 'Th',
	'Vineri': 'Fr',
	'Sambata': 'Sa',
	'Duminica': 'Su'
}

function reverseKeyValue(object) {
	for (let key in object) {
		object[object[key]] = key;
		delete object[key];
	}
}

reverseKeyValue(weekDays);

console.log(weekDays);