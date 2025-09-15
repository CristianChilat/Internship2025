class Animal {
    constructor(name, food, location) {
        this.name = name;
        this.food = food;
        this.location = location;
    }

    makeNoise() {
        return `The ${this.name} is making a noise!`
    }
    static eat(animal) {
        return `The ${animal.name} is eating ${animal.food}!`;
    }
    static sleep(animal) {
        return `The ${animal.name} is sleeping!`;
    }
}

class Dog extends Animal {
    constructor(name, food, location, breed) {
        super(name, food, location);
        this.breed = breed;
    }
}

class Cat extends Animal {
    constructor(name, food, location, color) {
        super(name, food, location);
        this.color = color;
    }
}

class Horse extends Animal {
    constructor(name, food, location, type) {
        super(name, food, location);
        this.type = type;
    }
}

class Veterinarian {
    constructor(name, specialty) {
        this.name = name;
        this.specialty = specialty;
    }

    checkAnimal(animal) {
        console.log(`Checking ${animal.name}...`);
        console.log(`Location: ${animal.location}`);
        console.log(`Diet: ${animal.food}`);
    }

    treatAnimal(animal) {
       console.log(`Dr. ${this.name} is treating ${animal.name}`);
    }
}

const hermanVeterinarian = new Veterinarian('Dr. Smith', 'Veterinary medicine');

const persianCat = new Cat('Persian', 'rats', 'Jerusalem', 'black');
const dog = new Dog('Rex', 'meat', 'California', 'Bulldog');
const horse = new Horse('Magnus', 'cabbage', 'Germany', 'racing');

console.log(persianCat.makeNoise());
console.log(Dog.eat(dog));
console.log(Horse.sleep(horse));

hermanVeterinarian.checkAnimal(dog);
hermanVeterinarian.treatAnimal(dog);

console.log(hermanVeterinarian.name);
console.log(hermanVeterinarian.specialty);