const firstPerson = {
	name: 'Person',
	age: '123',
	salary: 1542.33,
	contacts: {
		phone: '123',
		email: 'email@domain.com',
	},
}

const secondPerson = {
	name: 'Prson',
	age: '123',
	salary: 1542.33,
	contacts: {
		phone: '23',
		email: 'email@domain.com',
	},
}

function intersection(obj1, obj2) {
    const result = {};

    for (let key in obj1) {

        if (key in obj2) {

            if (typeof obj1[key] === 'object' && obj1[key] !== null && 
                typeof obj2[key] === 'object' && obj2[key] !== null) {
                const nestedIntersection = intersection(obj1[key], obj2[key]);

                if (Object.keys(nestedIntersection).length > 0) {
                    result[key] = nestedIntersection;
                }
            } else if (obj1[key] === obj2[key]) {
                result[key] = obj1[key];
            }
        }
    }

    return result;
}

console.log(intersection(firstPerson, secondPerson));