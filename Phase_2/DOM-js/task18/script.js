const playerElement = document.getElementById('player');

if (!playerElement.style.left) playerElement.style.left = '0px';
if (!playerElement.style.top) playerElement.style.top = '0px';

document.addEventListener('keydown', (event) => {
	const left = playerElement.offsetLeft;
	const top = playerElement.offsetTop;

	if (event.key === 'ArrowLeft' && left > 0) {
		playerElement.style.left = `${left - 10}px`;
	} else if (event.key === 'ArrowRight' && left < document.body.clientWidth - (playerElement.offsetWidth / 2)) {
		playerElement.style.left = `${left + 10}px`;
	} else if (event.key === 'ArrowUp' && top > 0) {
		playerElement.style.top = `${top - 10}px`;
	} else if (event.key === 'ArrowDown') {
		playerElement.style.top = `${top + 10}px`;
	}
})