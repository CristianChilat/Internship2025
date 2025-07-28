const jsonEmployees = `[
	{
		"personalInfo": {
			"name": "John",
			"surname": "Smith",
			"IDNP": "2001234567890",
			"domicileAddress": "123 Maple Street, New York, NY 10001",
			"birthPlace": "Boston, MA",
			"birthday": "1985-03-15",
			"gender": "Male"
		},
		"contactInfo": {
			"email": "john.smith@company.com",
			"phoneNumber": "+1-555-123-4567",
			"domicilePhone": "+1-555-987-6543"
		},
		"workInfo": {
			"post": "Senior Software Developer",
			"startWorkingDate": "2018-06-01",
			"salary": "95000",
			"yearsExperience": "8",
			"department": "Engineering",
			"workTime": {
				"start": "09:00",
				"end": "17:00",
				"lunchStart": "12:00",
				"lunchEnd": "13:00"
			}
		}
	},
	{
		"personalInfo": {
			"name": "Emma",
			"surname": "Johnson",
			"IDNP": "2001234567891",
			"domicileAddress": "456 Oak Avenue, Chicago, IL 60601",
			"birthPlace": "Seattle, WA",
			"birthday": "1990-08-22",
			"gender": "Female"
		},
		"contactInfo": {
			"email": "emma.johnson@company.com",
			"phoneNumber": "+1-555-234-5678",
			"domicilePhone": "+1-555-876-5432"
		},
		"workInfo": {
			"post": "Product Manager",
			"startWorkingDate": "2019-03-15",
			"salary": "88000",
			"yearsExperience": "6",
			"department": "Product",
			"workTime": {
				"start": "08:30",
				"end": "16:30",
				"lunchStart": "12:30",
				"lunchEnd": "13:30"
			}
		}
	},
	{
		"personalInfo": {
			"name": "Michael",
			"surname": "Chen",
			"IDNP": "2001234567892",
			"domicileAddress": "789 Pine Road, San Francisco, CA 94105",
			"birthPlace": "Los Angeles, CA",
			"birthday": "1988-11-30",
			"gender": "Male"
		},
		"contactInfo": {
			"email": "michael.chen@company.com",
			"phoneNumber": "+1-555-345-6789",
			"domicilePhone": "+1-555-765-4321"
		},
		"workInfo": {
			"post": "UX Designer",
			"startWorkingDate": "2020-01-15",
			"salary": "82000",
			"yearsExperience": "5",
			"department": "Design",
			"workTime": {
				"start": "10:00",
				"end": "18:00",
				"lunchStart": "13:00",
				"lunchEnd": "14:00"
			}
		}
	}
]`

const employeeStructureElements = {
	container: document.createElement("div"),
	body: document.createElement("div"),
}

employeeStructureElements.container.className = "employee-container";

function parseJSON(str) {
	return JSON.parse(str);
}

const employees = parseJSON(jsonEmployees);

function displayEmployee(employee, employeesStructure) {
	employeesStructure.body = document.createElement("div");
	employeesStructure.body.className = "employee-body";

	employeesStructure.body.appendChild(displayPersonalInformation(employee));
	employeesStructure.body.appendChild(displayContactsInformation(employee));
	employeesStructure.body.appendChild(displayWorkInformation(employee));// Missing className assignments for these elements

	employeesStructure.container.appendChild(employeesStructure.body);

	document.body.appendChild(employeesStructure.container);
}

function displayPersonalInformation(employees) {
	const employeesPersonalInfoElements = {
		container: document.createElement("div"),
		header: document.createElement("div"),
		name: document.createElement("div"),
		surname: document.createElement("div"),
		IDNP: document.createElement("div"),
		domicileAddress: document.createElement("div"),
		birthPlace: document.createElement("div"),
		birthday: document.createElement("div"),
		gender: document.createElement("div"),
	}

	employeesPersonalInfoElements.container.className = "employee-personal-info-container";
	employeesPersonalInfoElements.name.className = "employee-name";
	employeesPersonalInfoElements.header.className = "employee-personal-info-header";
	employeesPersonalInfoElements.surname.className = "employee-surname";
	employeesPersonalInfoElements.IDNP.className = "employee-idnp";
	employeesPersonalInfoElements.domicileAddress.className = "employee-domicile-address";
	employeesPersonalInfoElements.birthPlace.className = "employee-birthPlace";
	employeesPersonalInfoElements.birthday.className = "employee-birthday";
	employeesPersonalInfoElements.gender.className = "employee-gender";
	employeesPersonalInfoElements.name.innerHTML = "name";
	employeesPersonalInfoElements.surname.innerHTML = "surname";

	employeesPersonalInfoElements.name.innerHTML = `Name: ${employees.personalInfo.name}`;
	employeesPersonalInfoElements.surname.innerHTML = `Surname: ${employees.personalInfo.surname}`;
	employeesPersonalInfoElements.header.innerHTML = "Personal information";
	employeesPersonalInfoElements.IDNP.innerHTML = `IDNP: ${employees.personalInfo.IDNP}`;
	employeesPersonalInfoElements.domicileAddress.innerHTML = `Domicile address: ${employees.personalInfo.domicileAddress}`;
	employeesPersonalInfoElements.birthPlace.innerHTML = `Birth place: ${employees.personalInfo.birthPlace}`;
	employeesPersonalInfoElements.birthday.innerHTML = `Birthday: ${employees.personalInfo.birthday}`;
	employeesPersonalInfoElements.gender.innerHTML = `Gender: ${employees.personalInfo.gender}`;

	employeesPersonalInfoElements.container.appendChild(employeesPersonalInfoElements.name);
	employeesPersonalInfoElements.container.appendChild(employeesPersonalInfoElements.surname);
	employeesPersonalInfoElements.container.appendChild(employeesPersonalInfoElements.header);
	employeesPersonalInfoElements.container.appendChild(employeesPersonalInfoElements.IDNP);
	employeesPersonalInfoElements.container.appendChild(employeesPersonalInfoElements.domicileAddress);
	employeesPersonalInfoElements.container.appendChild(employeesPersonalInfoElements.birthPlace);
	employeesPersonalInfoElements.container.appendChild(employeesPersonalInfoElements.birthday);
	employeesPersonalInfoElements.container.appendChild(employeesPersonalInfoElements.gender);

	return employeesPersonalInfoElements.container;
}

function displayContactsInformation(employees) {
	const employeesContactsInfoElements = {
		container: document.createElement("div"),
		header: document.createElement("div"),
		email: document.createElement("div"),
		phoneNumber: document.createElement("div"),
		domicilePhone: document.createElement("div"),
	}

	employeesContactsInfoElements.container.className = "employee-contacts-info-container";
	employeesContactsInfoElements.header.className = "employee-contacts-info-header";
	employeesContactsInfoElements.email.className = "employee-email";
	employeesContactsInfoElements.phoneNumber.className = "employee-phone-number";
	employeesContactsInfoElements.domicilePhone.className = "employee-domicile-phone";

	employeesContactsInfoElements.header.innerHTML = "Contacts information";
	employeesContactsInfoElements.email.innerHTML = `Email: ${employees.contactInfo.email}`;
	employeesContactsInfoElements.phoneNumber.innerHTML = `Phone number: ${employees.contactInfo.phoneNumber}`;
	employeesContactsInfoElements.domicilePhone.innerHTML = `Domicile phone: ${employees.contactInfo.domicilePhone}`;

	employeesContactsInfoElements.container.appendChild(employeesContactsInfoElements.header);
	employeesContactsInfoElements.container.appendChild(employeesContactsInfoElements.email);
	employeesContactsInfoElements.container.appendChild(employeesContactsInfoElements.phoneNumber);
	employeesContactsInfoElements.container.appendChild(employeesContactsInfoElements.domicilePhone);

	return employeesContactsInfoElements.container;
}

function displayWorkInformation(employees) {
	const employeesWorkInfoElements = {
		container: document.createElement("div"),
		header: document.createElement("div"),
		post: document.createElement("div"),
		startWorkingDate: document.createElement("div"),
		salary: document.createElement("div"),
		yearsExperience: document.createElement("div"),
		department: document.createElement("div"),
		workTimeStart: document.createElement("div"),
		workTimeEnd: document.createElement("div"),
		workTimeLunchStart: document.createElement("div"),
		workTimeLunchEnd: document.createElement("div"),
	}

	employeesWorkInfoElements.container.className = "employee-work-info-container";
	employeesWorkInfoElements.header.className = "employee-work-info-header";
	employeesWorkInfoElements.post.className = "employee-post";
	employeesWorkInfoElements.startWorkingDate.className = "employee-start-working-date";
	employeesWorkInfoElements.salary.className = "employee-salary";
	employeesWorkInfoElements.yearsExperience.className = "employee-years-experience";
	employeesWorkInfoElements.department.className = "employee-department";
	employeesWorkInfoElements.workTimeStart.className = "employee-work-time-start";
	employeesWorkInfoElements.workTimeEnd.className = "employee-work-time-end";
	employeesWorkInfoElements.workTimeLunchStart.className = "employee-work-time-lunch-start";
	employeesWorkInfoElements.workTimeLunchEnd.className = "employee-work-time-lunch-end";

	employeesWorkInfoElements.header.innerHTML = 'Work Information';
	employeesWorkInfoElements.post.innerHTML = `Post: ${employees.workInfo.post}`;
	employeesWorkInfoElements.workTimeStart.innerHTML = `Start work time: ${employees.workInfo.workTime.start}`;
	employeesWorkInfoElements.startWorkingDate.innerHTML= `Works since: ${employees.workInfo.startWorkingDate}`;
	employeesWorkInfoElements.salary.innerHTML = `Salary: ${employees.workInfo.salary} $`;
	employeesWorkInfoElements.yearsExperience.innerHTML = `Years of experience: ${employees.workInfo.yearsExperience}`;
	employeesWorkInfoElements.department.innerHTML = `Department: ${employees.workInfo.department}`;
	employeesWorkInfoElements.workTimeStart.innerHTML = `Work time: ${employees.workInfo.workTime.start}`
	employeesWorkInfoElements.workTimeEnd.innerHTML = `End work time: ${employees.workInfo.workTime.end}`;
	employeesWorkInfoElements.workTimeLunchStart.innerHTML = `Start lunch time : ${employees.workInfo.workTime.lunchStart}`;
	employeesWorkInfoElements.workTimeLunchEnd.innerHTML = `End lunch time : ${employees.workInfo.workTime.lunchEnd}`;

	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.header);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.post);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.startWorkingDate);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.salary);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.yearsExperience);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.department);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.workTimeStart);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.workTimeEnd);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.workTimeLunchStart);
	employeesWorkInfoElements.container.appendChild(employeesWorkInfoElements.workTimeLunchEnd);

	return employeesWorkInfoElements.container;
}

function calculateAvgSalary(employees) {
	const salarySum = employees.reduce((sum, employee) => {
		return  sum + parseInt(employee.workInfo.salary);
	}, 0)

	return Math.round(salarySum / employees.length);
}

function findMinSalary(employees) {
	const salaries = employees.map(employee => parseInt(employee.workInfo.salary));

	return Math.min(...salaries);
}

function findMaxSalary(employees) {
	const salaries = employees.map(employee => employee.workInfo.salary);

	return Math.max(...salaries);
}

function displaySalariesInfo(employees) {
	const employeesSalariesInfoElements = {
		container: document.createElement("div"),
		header: document.createElement("div"),
		avgSalary: document.createElement("div"),
		minSalary: document.createElement("div"),
		maxSalary: document.createElement("div"),
	}

	employeesSalariesInfoElements.container.className = "employee-salaries-info-container";
	employeesSalariesInfoElements.header.className = "employee-salaries-info-header";
	employeesSalariesInfoElements.avgSalary.className = "employee-avg-salary";
	employeesSalariesInfoElements.minSalary.className = "employee-min-salary";
	employeesSalariesInfoElements.maxSalary.className = "employee-max-salary";

	employeesSalariesInfoElements.header.innerHTML = "Salaries information";
	employeesSalariesInfoElements.avgSalary.innerHTML = `Average salary: ${calculateAvgSalary(employees)} $`;
	employeesSalariesInfoElements.minSalary.innerHTML = `Minimum salary: ${findMinSalary(employees)} $`;
	employeesSalariesInfoElements.maxSalary.innerHTML = `Maximum salary: ${findMaxSalary(employees)} $`;

	employeesSalariesInfoElements.container.appendChild(employeesSalariesInfoElements.header);
	employeesSalariesInfoElements.container.appendChild(employeesSalariesInfoElements.avgSalary);
	employeesSalariesInfoElements.container.appendChild(employeesSalariesInfoElements.minSalary);
	employeesSalariesInfoElements.container.appendChild(employeesSalariesInfoElements.maxSalary);

	return employeesSalariesInfoElements.container;
}

employees.map(employee => {
	displayEmployee(employee, employeeStructureElements);
})

document.body.appendChild(displaySalariesInfo(employees));