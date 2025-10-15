const sendButtonElement = document.getElementById('send-button');
const statusDisplayElement = document.getElementById('status-container');

sendButtonElement.addEventListener('click', () => userRequest());

async function userRequest() {
    try {

        statusDisplayElement.textContent = 'Waiting for server response...';
        
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve();
                } catch (error) {
                    reject(error);
                }
            }, 2000);
        });
        await serverResponse();
    } catch (error) {
        await serverResponse(error);
    }
}

function serverResponse(error) {

    if (!error) {
        statusDisplayElement.textContent = 'Server response received!';
    } else {
        statusDisplayElement.textContent = 'Server response error!';
    }
}