try {
	JSON.parse("{not working json}");
} catch(e) {
	alert(`The type of your error is: ${e.name}`);
	alert(`Message error is: ${e.message}`);
}