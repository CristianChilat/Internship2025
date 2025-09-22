class Transport {
    constructor(model, price, manufactureYear, movingType) {
        this.model = model;
        this.price = price;
        this.manufactureYear = manufactureYear;
        this.movingType = movingType;
    }

    getModel() {
        return this.model;
    }

    getAge() {
        return new Date().getFullYear() - this.manufactureYear;
    }

    movement() {
        return `${this.model} is ${this.movingType}`;
    }
}

class Car extends Transport {
    constructor(model, price, manufactureYear, movingType = "riding") {
        super(model, price, manufactureYear, movingType);
    }
}

class Mercedes extends Car {
    constructor(model, price, manufactureYear, movingType) {
        super(model, price, manufactureYear, movingType);
    }
}

class Truck extends Car {
    constructor(model, price, manufactureYear, movingType) {
        super(model, price, manufactureYear, movingType);
    }
}

class Man extends Transport {
    constructor(model, price, manufactureYear, movingType = "walking") {
        super(model, price, manufactureYear, movingType);
    }
}

class Airplane extends Transport {
    constructor(model, price, manufactureYear, movingType = "flying") {
        super(model, price, manufactureYear, movingType);
    }
}

class Boeing extends Airplane {
    constructor(model, price, manufactureYear, movingType) {
        super(model, price, manufactureYear, movingType);
    }
}

class Airbus extends Airplane {
    constructor(model, price, manufactureYear, movingType) {
        super(model, price, manufactureYear, movingType);
    }
}

function demonstrateTransport() {

    const mercedes = new Mercedes("S-Class", 100000, 2022);
    const boeing = new Boeing("747", 200000000, 2020);
    const man = new Man("Human", 150000, 2006);
    const airbus = new Airbus("A380", 250000000, 2019);

    const vehicles = [mercedes, boeing, man, airbus];

    vehicles.forEach(vehicle => {
        console.log();
        console.log(`=== ${vehicle.constructor.name} ===`);
        console.log("Model:", vehicle.getModel());
        console.log("Age:", vehicle.getAge(), "years");
        console.log("Movement:", vehicle.movement());
    });
}

demonstrateTransport();