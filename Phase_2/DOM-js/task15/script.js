const inputElement = document.getElementById('number-input');

inputElement.addEventListener('blur', () => {

	if (inputElement.value < 0 || inputElement.value > 9) {
		inputElement.value = null;
	}
})
