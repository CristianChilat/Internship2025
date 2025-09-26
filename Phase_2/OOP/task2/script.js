class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	get getName() {
		return this.name;
	}
	get getSurname() {
		return this.surname;
	}
	set setName(persName) {
		this.name = persName;
	}
	set setSurname(persSurname) {
		this.surname = persSurname;
	}
}

const worker = new Person('Alexandru', 'Popescu');

console.log(worker.getName)
console.log(worker.getSurname)
console.log(worker.setName = 'Alex');
console.log(worker.setSurname = 'Cucos');