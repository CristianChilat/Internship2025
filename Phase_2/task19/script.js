const childElement = document.getElementById("child");
const leftParentElement = document.getElementById("left-parent");
const rightParentElement = document.getElementById("right-parent");

rightParentElement.onmouseover = function() {
	rightParentElement.style.backgroundColor = 'red';
};

rightParentElement.onmouseout = function() {
	rightParentElement.style.backgroundColor = 'blue';
};

childElement.onmousedown = function(mouseEvent) {
	childElement.style.position = 'absolute';
	childElement.style.zIndex = '100';

	document.body.append(childElement);

	function moveElementWithCursor(pageX, pageY) {
		childElement.style.left = pageX - childElement.offsetWidth / 2 + 'px';
		childElement.style.top = pageY - childElement.offsetHeight / 2 + 'px';
	}

	moveElementWithCursor(mouseEvent.pageX, mouseEvent.pageY);

	function onMouseMove(mouseEvent) {
		moveElementWithCursor(mouseEvent.pageX, mouseEvent.pageY);
	}

	document.addEventListener('mousemove', onMouseMove);

	childElement.onmouseup = function() {
		document.removeEventListener('mousemove', onMouseMove);
		childElement.onmouseup = null;
	};
};

//todo to make so when element is over an parent it will assign to it