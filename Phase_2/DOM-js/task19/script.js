const childElement = document.getElementById("child");
const leftParentElement = document.getElementById("left-parent");
const rightParentElement = document.getElementById("right-parent");

childElement.addEventListener('dragstart', (event) => {
	event.dataTransfer.setData('text', event.target.id);
	event.target.style.opacity = '0.5';
})

childElement.addEventListener('dragend', (event) => {
	event.target.style.opacity = '1';
})


rightParentElement.addEventListener('dragover', (event) => {
	event.preventDefault();
})

rightParentElement.addEventListener('drop', (event) => {
	event.preventDefault();
	event.target.appendChild(childElement);
})


leftParentElement.addEventListener('dragover', (event) => {
	event.preventDefault();
})

leftParentElement.addEventListener('drop', (event) => {
	event.preventDefault();
	event.target.appendChild(childElement);
})
