const tableBodyContainer = document.getElementById('table-body');
const inputElements = {
	textField: document.getElementById('person-input'),
	addButton: document.getElementById('add-button')
}

inputElements.addButton.addEventListener('click', () => {
	if (inputElements.textField.value) {
		const newRow = document.createElement('tr');
		const nameElement = document.createElement('td');
		const deleteButtonElement = document.createElement('td');

		nameElement.innerHTML = inputElements.textField.value;
		deleteButtonElement.innerHTML = 'X';
		deleteButtonElement.style.color = 'red';
		deleteButtonElement.style.cursor = 'pointer';
		deleteButtonElement.style.textAlign = 'center';

		deleteButtonElement.addEventListener('click', () => {
			newRow.remove();
		})

		newRow.appendChild(nameElement);
		newRow.appendChild(deleteButtonElement);
		tableBodyContainer.appendChild(newRow);
	} else {
		alert('Please enter a name in the field');
	}
	inputElements.textField.value = null;
})