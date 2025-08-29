const deleteChildButton = document.getElementById("delete-button");

deleteChildButton.addEventListener("click", (event) => {
	event.preventDefault();
	const childElement = document.querySelector("#child");
	childElement.remove();
})
