const inputElements = {
	decreaseElement: document.getElementById("button-decrease"),
	increaseElement: document.getElementById("button-increase"),
	displayElement: document.getElementById("input-number")
}

inputElements.displayElement.readOnly = true;
inputElements.displayElement.value = 0;
inputElements.displayElement.min = 0;
inputElements.displayElement.max = 9;

inputElements.decreaseElement.addEventListener("click", () => {
	inputElements.increaseElement.disabled = false;
	if (inputElements.displayElement.value > 0) {
		inputElements.displayElement.value--;
	} else {
		inputElements.decreaseElement.disabled = true;
	}
});

inputElements.increaseElement.addEventListener("click", () => {
	inputElements.decreaseElement.disabled = false;
	if (inputElements.displayElement.value < 9) {
		inputElements.displayElement.value++;
	} else {
		inputElements.increaseElement.disabled = true;
	}
});