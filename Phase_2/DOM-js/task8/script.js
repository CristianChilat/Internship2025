const inputElement = document.getElementById("input-for-list");
const buttonElement = document.getElementById("add-to-list-button");
const listContainer = document.getElementById("list-container");

function updateButtonStatus() {
	buttonElement.disabled = inputElement.value.trim().length === 0;
}
updateButtonStatus();

inputElement.addEventListener("input", updateButtonStatus);

buttonElement.addEventListener("click", () => {
	if (!inputElement.value.trim()) {
		buttonElement.disabled = true;
	} else {
		const listElement = document.createElement("li");
		listElement.innerHTML = inputElement.value.trim();
		listElement.addEventListener("click", () => {
			alert(listElement.innerHTML);
		})
		listContainer.appendChild(listElement);
		inputElement.value = "";
	}

})