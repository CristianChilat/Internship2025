const json = '{test value}';

try {

	const obj = JSON.parse(json);
	console.log(obj);
} catch (err) {
	console.log("Your JSON is invalid!");
}