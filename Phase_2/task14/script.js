const deleteChildButton = document.getElementById("delete-button");

deleteChildButton.addEventListener("click", () => {
	const childElement = document.querySelector("#parent > #child");
	childElement.remove();
})
