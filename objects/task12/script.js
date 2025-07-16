const Person = {
	firstName: 'Ion',
	lasName: 'Creanga',
	company: 'Amintiri din copilarie SRL',
}

let first;
let last;

function stringTemplate(str) {
	return  str.charAt(0).toUpperCase() + str.slice(1)
}

function displayName ([first, last, company, ...rest]) {
	first = stringTemplate(first);
	last = stringTemplate(last);
	company = stringTemplate(company);

	console.log(`Name: ${first} ${last}, Company: ${company}, Another info: ${rest}`);
}

displayName(Object.values(Person));