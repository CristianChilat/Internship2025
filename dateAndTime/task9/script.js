const timerDisplayElements = {
	days: document.getElementById('days-display'),
	hours: document.getElementById('hours-display'),
	minutes: document.getElementById('minutes-display')
}

const timerControlElements = {
	start: document.getElementById('start-button'),
	stop: document.getElementById('stop-button'),
	reset: document.getElementById('reset-button')
}

const timerInputElements = {
	days: document.getElementById('days-input'),
	hours: document.getElementById('hours-input'),
	minutes: document.getElementById('minutes-input')
}

const timeToMS = {
	DAYS_TO_MS: 60 * 60 * 24 * 1000,
	HOURS_TO_MS: 60 * 60 * 1000,
	MINUTES_TO_MS: 60 * 1000,
}

let intervalId = null;

function processInputValues (value) {
	return String(value).padStart(2, '0')
}

function inputValuesValidator (daysInputValue, hoursInputValue, minutesInputValue) {
	if (daysInputValue === 0 && hoursInputValue === 0 && minutesInputValue === 0
		|| daysInputValue === '' && hoursInputValue === '' && minutesInputValue === '') {
		alert('Fill at least one field!')
	} else if (daysInputValue < 0 || hoursInputValue < 0 || hoursInputValue > 24 || minutesInputValue < 0
		|| minutesInputValue > 59) {
		alert('Invalid input values!');
	} else {
		timerDisplayElements.days.innerHTML = processInputValues(daysInputValue);
		timerDisplayElements.hours.innerHTML = processInputValues(hoursInputValue);
		timerDisplayElements.minutes.innerHTML = processInputValues(minutesInputValue);
		return startTimer(true, totalTimeInMs);
	}
}

function startTimer (firstLoad, totalMsTime) {
	intervalId = setInterval(() => {
		timerDisplayUpdater(timerValuesUpdater(totalMsTime).daysValue, timerValuesUpdater(totalMsTime).hoursValue, timerValuesUpdater(totalMsTime).minutesValues)
		totalMsTime -= 1000;
		if (totalMsTime === 0 || totalMsTime < 0) {
			stopTimer();
		}
	}, 1000);
}

function timerDisplayUpdater (daysInputValue, hoursInputValue, minutesInputValue) {
	timerDisplayElements.days.innerHTML = processInputValues(daysInputValue);
	timerDisplayElements.hours.innerHTML = processInputValues(hoursInputValue);
	timerDisplayElements.minutes.innerHTML = processInputValues(minutesInputValue);
}

function calculateTotalTimeInMs (daysValue, hoursValue, minutesValue) {
	return daysValue * timeToMS.DAYS_TO_MS + hoursValue * timeToMS.HOURS_TO_MS + minutesValue * timeToMS.MINUTES_TO_MS;
}

function calculateDaysValue (totalMsTime) {
	return Math.floor(totalMsTime / timeToMS.DAYS_TO_MS);
}

function calculateHoursValue (totalMsTime, daysTime) {
	return Math.floor((totalMsTime - (timeToMS.DAYS_TO_MS * daysTime)) / timeToMS.HOURS_TO_MS);
}

function calculateMinutesValue (totalMsTime, daysTime, hoursTime) {
	return Math.floor((totalMsTime - (timeToMS.DAYS_TO_MS * daysTime) - (timeToMS.HOURS_TO_MS * hoursTime)) / timeToMS.MINUTES_TO_MS);
}

function timerValuesUpdater (totalMsTime) {
	let daysTime = calculateDaysValue(totalMsTime);
	let hoursTime = calculateHoursValue(totalMsTime, daysTime);
	let minutesTime = calculateMinutesValue(totalMsTime, daysTime, hoursTime);

	return  {
		daysValue: daysTime,
		hoursValue: hoursTime,
		minutesValues: minutesTime
	}
}

function stopTimer () {
	clearInterval(intervalId);
}

let totalTimeInMs;

timerControlElements.start.addEventListener('click', () => {
	totalTimeInMs = calculateTotalTimeInMs(timerInputElements.days.value, timerInputElements.hours.value, timerInputElements.minutes.value);
	stopTimer();
	inputValuesValidator(timerInputElements.days.value, timerInputElements.hours.value, timerInputElements.minutes.value);
})

timerControlElements.stop.addEventListener('click', () => {
	stopTimer();
})
