const user1 = {
	name: 'user1',
	age: 123
}

const user2 = structuredClone(user1);

user2.age = 321;
user2.name = 'user2';

console.log(user1);
console.log(user2);