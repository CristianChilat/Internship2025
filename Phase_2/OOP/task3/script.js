class Person {
	constructor(name, surname, rate, days) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;
	}

	get getSalary() {
		return this.rate * this.days;
	}
}

const firstWorker = new Person('Alexandru', 'Popescu', 100, 20);

console.log(firstWorker.name);
console.log(firstWorker.surname);
console.log(firstWorker.rate);
console.log(firstWorker.days);
console.log(firstWorker.getSalary);

console.log('-------------')

const secondWorker = new Person('Alex', 'Cucos', 100, 30);

console.log(firstWorker.getSalary + secondWorker.getSalary);