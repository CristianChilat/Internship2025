const clockElements = {
	time: {
		hours: document.getElementById('hours'),
		minutes: document.getElementById('minutes'),
		seconds: document.getElementById('seconds'),
	},
	controls: {
		start: document.getElementById('start'),
		stop: document.getElementById('stop')
	}
}

let intervalId = null;

const clockUpdater = () => {
	clockElements.time.hours.innerHTML = String(new Date().getHours()).padStart(2, '0');
	clockElements.time.minutes.innerHTML = String(new Date().getMinutes()).padStart(2, '0');
	clockElements.time.seconds.innerHTML = String(new Date().getSeconds()).padStart(2, '0');
}

const startClock = (firstLoad) => {
	intervalId = setInterval(clockUpdater, firstLoad ? 0 : 1000);
}

const stopClock = () => {
	clearInterval(intervalId);
}

const main = () => {
	startClock(true);

	clockElements.controls.start.addEventListener('click', () => {
		stopClock()
		startClock()
	})

	clockElements.controls.stop.addEventListener('click', () => {
		stopClock()
	})
}

main()