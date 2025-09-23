class FormElement {
	constructor(id, name, type, placeholder, defaultValue, rules) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.placeholder = placeholder;
		this.value = defaultValue;
		this.rules = rules;
	}

	static validators = {
	    email: (value, rules) => {
	        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if (rules.minLength && value.length < rules.minLength) {
				return false;
			}

			if (rules.maxLength && value.length > rules.maxLength) {
				return false;
			}

			return regex.test(value);
	    },
	    name: (value, rules) => {
	        const regex = /^[a-zA-Z]+$/;

			return regex.test(value) &&
	               value.length >= rules.minLength &&
	               value.length <= rules.maxLength;
	    },
	    age: (value, rules) => {
	        const regex = /^[0-9]+$/;
	        const num = parseInt(value);

			return regex.test(value) &&
	               num >= 10 &&
	               value.length >= rules.minLength &&
	               value.length <= rules.maxLength;
	    },
	    birthdate: (value, rules) => {
	        const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;

			return regex.test(value) &&
	               value.length >= rules.minLength &&
	               value.length <= rules.maxLength;
	    }
	}

	static validate(element) {
	    const value = element.value;
	    const validatorType = element.getAttribute('name');

		if (!value || !validatorType) {
			return false;
		}

	    const rules = formSchema.find(item => item.name === validatorType)?.rules;

	    if (!FormElement.validators[validatorType]) {
	        console.warn(`No validator found for type: ${validatorType}`);

	        return true;
	    }

	    if (!rules) {
	        console.warn(`No rules found for: ${validatorType}`);

			return true;
	    }

	    const isValid = FormElement.validators[validatorType](value, rules);
	    element.style.borderColor = isValid ? 'green' : 'red';
	    element.style.borderStyle = 'solid';

		return isValid;
	}


	create() {
		const inputElementContainer = document.createElement('label');
		inputElementContainer.classList.add(`input-container-${this.name}`);

		const element = document.createElement('input');
		element.type = this.type;
		element.value = this.value;
		element.id = this.id;
		element.name = this.name;
		element.placeholder = this.placeholder;

		const elementName = document.createElement('div');
		elementName.innerHTML = this.name.slice(0, 1).toUpperCase() + this.name.slice(1);

		element.addEventListener('input', (e) => {
			FormElement.validate(e.target);
		})

		inputElementContainer.appendChild(elementName);
		inputElementContainer.appendChild(element);

		return inputElementContainer;
	}
}

const formContainer = document.createElement('form');
formContainer.id = 'form-container';

const formInputsContainer = document.createElement('div');
formInputsContainer.id = 'form-input-container';

document.body.appendChild(formContainer);

const formSchema = [
	{
		id: 'name',
		name: 'name',
		type: 'text',
		placeholder: 'Name',
		defaultValue: 'John',
		rules: {
			type: 'text',
			minLength: 2,
			maxLength: 30,
		}
	},
	{
		id: 'email',
		name: 'email',
		type: 'email',
		placeholder: 'Email',
		defaultValue: 'gmail@gmail.com',
		rules: {
			type: 'email',
			minLength: 7,
			maxLength: 100,
		}
	},
	{
		id: 'age',
		name: 'age',
		type: 'age',
		placeholder: 'Age',
		defaultValue: '26',
		rules: {
			type: 'age',
			minLength: 1,
			maxLength: 3,
		}
	},
	{
		id: 'birthdate',
		name: 'birthdate',
		type: 'birthdate',
		placeholder: 'Birthdate: DD.MM.YYYY',
		defaultValue: '20.04.2006',
		rules: {
			type: 'email',
			minLength: 10,
			maxLength: 10,
		}
	},
]

document.addEventListener('DOMContentLoaded', () => {

	formSchema.forEach(input => {
		const newElement = new FormElement(input.id, input.name, input.type , input.placeholder, input.defaultValue, input.rules);
		formInputsContainer.appendChild(newElement.create());
	})

	formContainer.appendChild(formInputsContainer);

	const formButtonContainer = document.createElement('div');
	formButtonContainer.id = 'form-button-container';

	const formSubmitButton = document.createElement('button');
	formSubmitButton.id = 'form-submit-button';
	formSubmitButton.type = 'submit';
	formSubmitButton.innerHTML = 'Submit ';



	formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const inputs = formContainer.querySelectorAll('input');
    let isValid = true;

    inputs.forEach((input) => {
        if (!FormElement.validate(input)) {
            isValid = false;
        }
    });

    const existingMessage = formButtonContainer.querySelector('span');
    if (existingMessage) {
        existingMessage.remove();
    }

    const message = document.createElement('span');
    if (!isValid) {
        message.innerHTML = "Your form is not valid!";
        message.style.color = 'red';
    } else {
        message.innerHTML = "Your form is valid!";
        message.style.color = 'green';
    }
    
    formButtonContainer.appendChild(message);
});

	formButtonContainer.appendChild(formSubmitButton);
	formContainer.appendChild(formButtonContainer);

})