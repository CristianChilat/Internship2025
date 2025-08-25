const element = document.getElementById("elem");

element.addEventListener("click", () => {
	alert(`The width of this element is: ${element.scrollWidth}px and height is: ${element.scrollHeight}px`);
	element.style.width = `${element.scrollWidth * 2}px`;
	element.style.height = `${element.scrollHeight * 2}px`;
})