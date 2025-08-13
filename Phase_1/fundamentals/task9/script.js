const name = prompt("What is your name?");
const JSKnowledge = confirm("Do you know JS?");

alert(`Hello ${name}`);

if (JSKnowledge === true) {
	alert("Congratulations!");
} else if (JSKnowledge === false) {
	alert("You can start your studies right now!");
}
