const sendButtonElement = document.getElementById('send-button');
const statusDisplayElement = document.getElementById('status-container');

sendButtonElement.addEventListener('click', userRequest);

function userRequest() {
	statusDisplayElement.textContent = 'Waiting for server response...';

	return new Promise((resolve, reject) => {

		setTimeout(() => {
			try {
				notAExistingFunction();
				resolve();
			} catch (error) {
				reject(error);
			}
		}, 2000);
	})
		.then(serverResponse)
		.catch(error => serverResponse(error));
}

function serverResponse(error) {
	if (!error) {
		statusDisplayElement.textContent = 'Server response received!';
	} else {
		statusDisplayElement.textContent = 'Server response error!';
	}
}