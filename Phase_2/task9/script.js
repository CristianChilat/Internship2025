const options = {
	top: '10',
	right: '10',
	message: 'Hello World!',
	className: 'welcome'
}

function showNotification(options) {
	const notification = document.createElement('div');

	notification.style.top = `${options.top}px`;
	notification.style.right = `${options.right}px`;
	notification.style.position = 'fixed';
	notification.innerHTML = `${options.message}`;
	notification.className = options.className;

	document.body.appendChild(notification);

	setTimeout(() => {
		notification.remove();
	}, 3000)
}

document.addEventListener('DOMContentLoaded', () => {
	showNotification(options);
})