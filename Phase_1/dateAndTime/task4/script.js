function compareDates(date1, date2) {
	if (date1.getTime() > date2.getTime()) {
		return 'Date 1 > Date 2';
	} else if (date1.getTime() < date2.getTime()) {
		return 'Date 1 < Date 2';
	} else {
		return 'Date 1 = Date 2';
	}
}

console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));