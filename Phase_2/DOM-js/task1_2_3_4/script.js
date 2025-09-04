document.addEventListener("DOMContentLoaded", () => {
	document.body.style.backgroundColor = "red";

	setTimeout(() => {
		document.body.style.backgroundColor = "green";
	}, 3000)
})

const buttonElement = document.getElementById("button-orange");

buttonElement.addEventListener("click", (event) => {
	event.preventDefault();
	document.body.style.backgroundColor = "orange";
})

function listBraker(num, timerID) {
	if (num > 20) {
		return clearInterval(timerID);
	}
}

function colorListElements(element, num) {
	if (num % 2 === 0) {
		return element.style.backgroundColor = "green";
	} else {
		return element.style.backgroundColor = "purple";
	}
}

function createLiElement(num) {
	const liElement = document.createElement("li");
	liElement.innerHTML = `Element ${num}`;
	colorListElements(liElement, num);
	return liElement;
}

document.addEventListener("DOMContentLoaded", () => {
	let i = 1;
	const olElement = document.createElement("ol");
	olElement.id = "ol-container";
	document.body.appendChild(olElement);

	let numberedListTimer = setInterval(() => {
		olElement.appendChild(createLiElement(i));
		i++;
		listBraker(i, numberedListTimer);
	}, 2000)
})