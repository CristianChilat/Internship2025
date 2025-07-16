const weekDaysRU = {
	'Mo': 'Понедельник',
	'Tu': 'Вторник',
	'We': 'Среда',
	'Th': 'Четверг',
	'Fr': 'Пятница',
	'Sa': 'Суббота',
	'Su': 'Воскресенье',
}

const weekDaysEN = {
	'Mo': 'Monday',
	'Tu': 'Tuesday',
	'We': 'Wednesday',
	'Th': 'Thursday',
	'Fr': 'Friday',
	'Sa': 'Saturday',
	'Su': 'Sunday',
}

for (let keyEN in weekDaysEN) {
	for (let keyRU in weekDaysRU) {
		if (keyEN === keyRU) {
			weekDaysRU[keyRU] = weekDaysEN[keyEN];
		}
	}
}

console.log(weekDaysRU);