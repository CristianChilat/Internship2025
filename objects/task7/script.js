const person = {
	name: 'Person',
	age: '123',
	salary: 1542.33,
	contacts: {
		phone: '123',
		email: 'email@domain.com',
	},
	address: 'Moldova',
	get personName() {
		return this.name;
	},
	get personAge() {
		return this.age;
	},
	get personSalary() {
		return this.salary;
	},
	get personAddress() {
		return this.address;
	},
	get personContacts() {
		return this.contacts;
	}
}

