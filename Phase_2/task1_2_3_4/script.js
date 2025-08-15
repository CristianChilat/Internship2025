document.addEventListener("DOMContentLoaded", () => {
	document.body.style.backgroundColor = "red";

	setTimeout(() => {
		document.body.style.backgroundColor = "green";
	}, 3000)
})

const buttonElement = document.getElementById("button-orange");

buttonElement.addEventListener("click", () => {
	document.body.style.backgroundColor = "orange";
})