class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	get getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User{
	constructor(name, surname, receiptsYear) {
		super(name, surname);
		this.receiptsYear = receiptsYear;
	}

	static getCourse(x) {
		return new Date().getFullYear() - x.receiptsYear;
	}
}

const student = new Student('Alex', 'Popescu', '2023');

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName);
console.log(student.receiptsYear);
console.log(`In ${Student.getCourse(student)} course`);