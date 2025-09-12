class Validator {
	constructor(email, phone, domain, date) {
		this.email = email;
		this.phone = phone;
		this.domain = domain;
		this.date = date;
	}

	static isEmailValid(x) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(x.email);
	}

	static isPhoneValid(x) {
		const phoneRegex = /^\+\d{9,}$/;
		return phoneRegex.test(x.phone);
	}

	static	isDomainValid(x) {
		const domainRegex = /^[a-z]{2,}\.[a-z]{2,}$/;
		return domainRegex.test(x.domain);
	}

	static	isDateValid(x) {
		const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/;
		return dateRegex.test(x.date);
	}
}

const info = new Validator("gmail@gmail.com", "+079030839", "google.com", "01.04.2006");

console.log(Validator.isEmailValid(info));
console.log(Validator.isPhoneValid(info));
console.log(Validator.isDomainValid(info));
console.log(Validator.isDateValid(info));