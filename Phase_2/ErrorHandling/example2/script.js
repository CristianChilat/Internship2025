const jsonObj = '{"name": "Alexandru"}'

try {
	const obj = JSON.parse(jsonObj);
	if (!obj.age) {
		throw new Error("Age is not defined!");
	} else {
		console.log(obj.age);
	}
} catch (err) {

	console.log(err);
}