const employeesJSON = `[
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
]`;

let errorMessage = null;

const employeeStructureElements = {
	container: document.createElement("div"),
	body: null,
}

employeeStructureElements.container.className = "employee-container";

function parseJSON(str) {
	try{
		return JSON.parse(str);
	} catch(e) {
		console.log(e);
		errorMessage = e;
		return null;
	}
}

const employees = parseJSON(employeesJSON);

function displayEmployee(employee, employeeStructure) {
	employeeStructure.body = document.createElement("div");
	employeeStructure.body.className = "employee-body";

	employeeStructure.body.appendChild(displayPersonalInformation(employee));
	employeeStructure.body.appendChild(displayContactsInformation(employee));
	employeeStructure.body.appendChild(displayWorkInformation(employee));// Missing className assignments for these elements

	employeeStructure.container.appendChild(employeeStructure.body);

	document.body.appendChild(employeeStructure.container);
}

function displayPersonalInformation(employee) {
	const employeePersonalInfoElements = {
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

	employeePersonalInfoElements.container.className = "employee-personal-info-container";
	employeePersonalInfoElements.name.className = "employee-name";
	employeePersonalInfoElements.header.className = "employee-personal-info-header";
	employeePersonalInfoElements.surname.className = "employee-surname";
	employeePersonalInfoElements.IDNP.className = "employee-idnp";
	employeePersonalInfoElements.domicileAddress.className = "employee-domicile-address";
	employeePersonalInfoElements.birthPlace.className = "employee-birthPlace";
	employeePersonalInfoElements.birthday.className = "employee-birthday";
	employeePersonalInfoElements.gender.className = "employee-gender";
	employeePersonalInfoElements.name.innerHTML = "name";
	employeePersonalInfoElements.surname.innerHTML = "surname";

	employeePersonalInfoElements.name.innerHTML = `Name: ${employee.personalInfo.name}`;
	employeePersonalInfoElements.surname.innerHTML = `Surname: ${employee.personalInfo.surname}`;
	employeePersonalInfoElements.header.innerHTML = "Personal information";
	employeePersonalInfoElements.IDNP.innerHTML = `IDNP: ${employee.personalInfo.IDNP}`;
	employeePersonalInfoElements.domicileAddress.innerHTML = `Domicile address: ${employee.personalInfo.domicileAddress}`;
	employeePersonalInfoElements.birthPlace.innerHTML = `Birth place: ${employee.personalInfo.birthPlace}`;
	employeePersonalInfoElements.birthday.innerHTML = `Birthday: ${employee.personalInfo.birthday}`;
	employeePersonalInfoElements.gender.innerHTML = `Gender: ${employee.personalInfo.gender}`;

	employeePersonalInfoElements.container.appendChild(employeePersonalInfoElements.name);
	employeePersonalInfoElements.container.appendChild(employeePersonalInfoElements.surname);
	employeePersonalInfoElements.container.appendChild(employeePersonalInfoElements.header);
	employeePersonalInfoElements.container.appendChild(employeePersonalInfoElements.IDNP);
	employeePersonalInfoElements.container.appendChild(employeePersonalInfoElements.domicileAddress);
	employeePersonalInfoElements.container.appendChild(employeePersonalInfoElements.birthPlace);
	employeePersonalInfoElements.container.appendChild(employeePersonalInfoElements.birthday);
	employeePersonalInfoElements.container.appendChild(employeePersonalInfoElements.gender);

	return employeePersonalInfoElements.container;
}

function displayContactsInformation(employee) {
	const employeeContactsInfoElements = {
		container: document.createElement("div"),
		header: document.createElement("div"),
		email: document.createElement("div"),
		phoneNumber: document.createElement("div"),
		domicilePhone: document.createElement("div"),
	}

	employeeContactsInfoElements.container.className = "employee-contacts-info-container";
	employeeContactsInfoElements.header.className = "employee-contacts-info-header";
	employeeContactsInfoElements.email.className = "employee-email";
	employeeContactsInfoElements.phoneNumber.className = "employee-phone-number";
	employeeContactsInfoElements.domicilePhone.className = "employee-domicile-phone";

	employeeContactsInfoElements.header.innerHTML = "Contacts information";
	employeeContactsInfoElements.email.innerHTML = `Email: ${employee.contactInfo.email}`;
	employeeContactsInfoElements.phoneNumber.innerHTML = `Phone number: ${employee.contactInfo.phoneNumber}`;
	employeeContactsInfoElements.domicilePhone.innerHTML = `Domicile phone: ${employee.contactInfo.domicilePhone}`;

	employeeContactsInfoElements.container.appendChild(employeeContactsInfoElements.header);
	employeeContactsInfoElements.container.appendChild(employeeContactsInfoElements.email);
	employeeContactsInfoElements.container.appendChild(employeeContactsInfoElements.phoneNumber);
	employeeContactsInfoElements.container.appendChild(employeeContactsInfoElements.domicilePhone);

	return employeeContactsInfoElements.container;
}

function displayWorkInformation(employee) {
	const employeeWorkInfoElements = {
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

	employeeWorkInfoElements.container.className = "employee-work-info-container";
	employeeWorkInfoElements.header.className = "employee-work-info-header";
	employeeWorkInfoElements.post.className = "employee-post";
	employeeWorkInfoElements.startWorkingDate.className = "employee-start-working-date";
	employeeWorkInfoElements.salary.className = "employee-salary";
	employeeWorkInfoElements.yearsExperience.className = "employee-years-experience";
	employeeWorkInfoElements.department.className = "employee-department";
	employeeWorkInfoElements.workTimeStart.className = "employee-work-time-start";
	employeeWorkInfoElements.workTimeEnd.className = "employee-work-time-end";
	employeeWorkInfoElements.workTimeLunchStart.className = "employee-work-time-lunch-start";
	employeeWorkInfoElements.workTimeLunchEnd.className = "employee-work-time-lunch-end";

	employeeWorkInfoElements.header.innerHTML = 'Work Information';
	employeeWorkInfoElements.post.innerHTML = `Post: ${employee.workInfo.post}`;
	employeeWorkInfoElements.workTimeStart.innerHTML = `Start work time: ${employee.workInfo.workTime.start}`;
	employeeWorkInfoElements.startWorkingDate.innerHTML= `Works since: ${employee.workInfo.startWorkingDate}`;
	employeeWorkInfoElements.salary.innerHTML = `Salary: ${employee.workInfo.salary} $`;
	employeeWorkInfoElements.yearsExperience.innerHTML = `Years of experience: ${employee.workInfo.yearsExperience}`;
	employeeWorkInfoElements.department.innerHTML = `Department: ${employee.workInfo.department}`;
	employeeWorkInfoElements.workTimeStart.innerHTML = `Work time: ${employee.workInfo.workTime.start}`
	employeeWorkInfoElements.workTimeEnd.innerHTML = `End work time: ${employee.workInfo.workTime.end}`;
	employeeWorkInfoElements.workTimeLunchStart.innerHTML = `Start lunch time : ${employee.workInfo.workTime.lunchStart}`;
	employeeWorkInfoElements.workTimeLunchEnd.innerHTML = `End lunch time : ${employee.workInfo.workTime.lunchEnd}`;

	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.header);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.post);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.startWorkingDate);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.salary);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.yearsExperience);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.department);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.workTimeStart);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.workTimeEnd);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.workTimeLunchStart);
	employeeWorkInfoElements.container.appendChild(employeeWorkInfoElements.workTimeLunchEnd);

	return employeeWorkInfoElements.container;
}

function calculateAvgSalary(employee) {
	const salarySum = employee.reduce((sum, employee) => {
		return  sum + parseInt(employee.workInfo.salary);
	}, 0)

	return Math.round(salarySum / employee.length);
}

function findMinSalary(employee) {
	const salaries = employee.map(employee => parseInt(employee.workInfo.salary));

	return Math.min(...salaries);
}

function findMaxSalary(employee) {
	const salaries = employee.map(employee => employee.workInfo.salary);

	return Math.max(...salaries);
}

function displaySalariesInfo(employee) {
	const employeeSalariesInfoElements = {
		container: document.createElement("div"),
		header: document.createElement("div"),
		avgSalary: document.createElement("div"),
		minSalary: document.createElement("div"),
		maxSalary: document.createElement("div"),
	}

	employeeSalariesInfoElements.container.className = "employee-salaries-info-container";
	employeeSalariesInfoElements.header.className = "employee-salaries-info-header";
	employeeSalariesInfoElements.avgSalary.className = "employee-avg-salary";
	employeeSalariesInfoElements.minSalary.className = "employee-min-salary";
	employeeSalariesInfoElements.maxSalary.className = "employee-max-salary";

	employeeSalariesInfoElements.header.innerHTML = "Salaries information";
	employeeSalariesInfoElements.avgSalary.innerHTML = `Average salary: ${calculateAvgSalary(employee)} $`;
	employeeSalariesInfoElements.minSalary.innerHTML = `Minimum salary: ${findMinSalary(employee)} $`;
	employeeSalariesInfoElements.maxSalary.innerHTML = `Maximum salary: ${findMaxSalary(employee)} $`;

	employeeSalariesInfoElements.container.appendChild(employeeSalariesInfoElements.header);
	employeeSalariesInfoElements.container.appendChild(employeeSalariesInfoElements.avgSalary);
	employeeSalariesInfoElements.container.appendChild(employeeSalariesInfoElements.minSalary);
	employeeSalariesInfoElements.container.appendChild(employeeSalariesInfoElements.maxSalary);

	return employeeSalariesInfoElements.container;
}

function main() {
	employees.map(employee => {
		displayEmployee(employee, employeeStructureElements);
	})

	document.body.appendChild(displaySalariesInfo(employees));
}

if(errorMessage === null) {
	main();
} else {
	document.body.innerHTML = `Error: ${errorMessage}`;
}