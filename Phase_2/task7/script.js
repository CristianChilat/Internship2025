for (let element of document.body.children) {
	if (element.matches('a[href^="http"]')) {
		element.style.color = 'red';
	}
}