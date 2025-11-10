const inputElement = document.createElement('input');
const clearButtonElement = document.createElement('button');
inputElement.type = 'text';
inputElement.placeholder = 'Write here';

clearButtonElement.textContent = 'Clear';

if (!inputElement.value) {
	inputElement.value = localStorage.getItem('input');
}

inputElement.addEventListener('input', () => {
	localStorage.setItem('input', inputElement.value);
})

clearButtonElement.addEventListener('click', () => {
	localStorage.removeItem('input');
	inputElement.value = '';
})

document.body.appendChild(inputElement);
document.body.appendChild(clearButtonElement);