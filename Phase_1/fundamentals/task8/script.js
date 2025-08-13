const username = "admin";
const password = "admin123";
const inputUsername = prompt("Enter your username");
const inputPassword = prompt("Enter your password");

if (inputUsername === username && inputPassword === password) {
	console.log("Hello");
} else if (inputUsername === username && inputPassword !== password) {
	console.log("Wrong password");
} else if (inputUsername !== username && inputPassword === password) {
	console.log("Wrong username");
} else if (inputUsername !== username && inputPassword !== password) {
	console.log("Wrong password and username");
} else {
	console.log("Validation error");
}