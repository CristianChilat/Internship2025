function verifyPressedKeys(event) {
		return event.key >= 0 && event.key <= 9 || [",", ".", "Backspace"].includes(event.key);
}

document.addEventListener('keydown', (event) => {
	if (!verifyPressedKeys(event)) {
		event.preventDefault();
	}
})