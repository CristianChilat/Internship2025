let user = {
	sayHi() { // ignored
		alert("Hello");
	},
	[Symbol("id")]: 123, // ignored
	something: undefined, // ignored,
	name: 'John'
};

console.log( JSON.stringify(user) );