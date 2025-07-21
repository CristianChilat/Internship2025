const clockElements = {
	hours: document.getElementById('hours'),
	minutes: document.getElementById('minutes'),
	seconds: document.getElementById('seconds'),
	start: document.getElementById('start'),
	stop: document.getElementById('stop')
}

function clockUpdater () {
	clockElements.hours.innerHTML = String(new Date().getHours()).padStart(2, '0');
	clockElements.minutes.innerHTML = String(new Date().getMinutes()).padStart(2, '0');
	clockElements.seconds.innerHTML = String(new Date().getSeconds()).padStart(2, '0');
}

clockUpdater();

let intervalId = setInterval(clockUpdater, 1000);

clockElements.start.addEventListener('click', () => {

	clearInterval(intervalId);
	intervalId = setInterval(clockUpdater, 1000)
})

clockElements.stop.addEventListener('click', () => {
	clearInterval(intervalId);
})