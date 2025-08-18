const element = document.getElementById("elem");

element.addEventListener("click", () => {
	alert(`The width of this element is: ${element.offsetWidth}px and height is: ${element.offsetHeight}px`);
	element.style.width = `${element.offsetWidth * 2}px`;
	element.style.height = `${element.offsetHeight * 2}px`;
})

//todo find out how to ignore padding on click event