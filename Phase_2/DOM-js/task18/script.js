const playerElement = document.getElementById('player');
const playerFieldElement = document.getElementById('player-field');

document.addEventListener('keydown', (event) => {
	const left = playerElement.offsetLeft;
	const top = playerElement.offsetTop;

	if (event.key === 'ArrowLeft' && left > 0) {
		playerElement.style.left = `${left - 10}px`;
	} else if (event.key === 'ArrowRight' && left < playerFieldElement.clientWidth - (playerElement.offsetWidth)) {
		playerElement.style.left = `${left + 10}px`;
	} else if (event.key === 'ArrowUp' && top > 0) {
		playerElement.style.top = `${top - 10}px`;
	} else if (event.key === 'ArrowDown' && top < playerFieldElement.clientHeight - (playerElement.offsetHeight)) {
		playerElement.style.top = `${top + 10}px`;
	}
})