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

document.addEventListener("DOMContentLoaded", () => {
	let i = 1;
	const olElement = document.createElement("ol");
	olElement.id = "ol-container";
	document.body.appendChild(olElement);
	let numberedListTimer = setInterval(() => {
		const liElement = document.createElement("li");
		liElement.innerHTML = `Element ${i}`;
		olElement.appendChild(liElement);
		if (i % 2 === 0) {
			liElement.style.backgroundColor = "green";
		} else {
			liElement.style.backgroundColor = "purple";
		}
		i++;
		if (i > 20) {
			clearInterval(numberedListTimer);
		}
	}, 2000)
})