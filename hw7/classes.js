class Vehicle {
  name;
  type;
  wheelsCount;

  constructor(name = 'vehicle', type = 'unknown type', wheelsCount = 2) {
    this.name = name;
    this.type = type;
    this.wheelsCount = wheelsCount;
  }

  getFullDescription() {
    console.log(`This vehicle - '${this.getName()}' with type '${this.getType()}' and has '${this.getWheels()}' wheels`);

    return this;
  }

  getWheels() {
    return this.wheelsCount;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }
}

class Car extends Vehicle {
  doorsCount;
  engineType;
  engine;

  constructor(
    name = 'car',
    type = 'sedan',
    wheelsCount = 4,
    doorsCount = 4,
    engineType = 'petrol',
    engine = 'V8'
  ) {
    super(name, type, wheelsCount);

    this.doorsCount = doorsCount;
    this.engineType = engineType;
    this.engine = engine;
  }

  getDoorsCount() {
    return this.doorsCount;
  }

  getEngine() {
    return this.engine;
  }

  getEngineType() {
    return this.engineType;
  }

  getEngineDescription() {
    console.log(`This car has ${this.getEngine()} ${this.getEngineType()} engine`);
  }

  setDoorsCount(doorsCount) {
    this.doorsCount = doorsCount;

    return this;
  }

  setEngineType(engineType) {
    this.engineType = engineType;

    return this;
  }

  setEngine(engine) {
    this.engine = engine;

    return this;
  }
}

class SuperCar extends Car {
  #isLuxury;

  constructor(
    name = 'Super car',
    type = 'sport coupe',
    wheelsCount = 4,
    doorsCount = 2,
    engineType = 'petrol',
    engine = 'V8',
    isLuxury = false
  ) {
    super(name, type, wheelsCount, doorsCount, engineType, engine);
    this.#isLuxury = isLuxury;
  }

  getFullDescription() {
    if(this.#isLuxury) {
      console.log(`It's luxury ${super.getDoorsCount()} doors car, ${super.getName()}, ${this.type} with ${super.getEngine()}`);
    } else {
      super.getEngineDescription();
    }
  }

  setLuxury(isLuxury) {
    this.#isLuxury = isLuxury;

    return this;
  }
}

class Bike extends Vehicle {
  material;
  maxSpeed;

  #width;
  #height;

  constructor(
    name = 'bike',
    type = 'simple',
    wheelsCount = 2,
    material = 'iron',
    maxSpeed = 30,
  ) {
    super(name, type, wheelsCount);
    this.material = material;
    this.maxSpeed = maxSpeed;

    // default size
    this.#width = 0;
    this.#height = 0;
  }

  getMaterial() {
    return this.material;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }

  getWidth() {
    return this.#width;
  }

  getHeight() {
    return this.#height;
  }

  setSize(width = 0, height = 0) {
    this.#width = width;
    this.#height = height;

    return this;
  }

  logBikeSize() {
    console.log(`Bike size: ${this.getWidth()}x${this.getHeight()}m`)

    return this;
  }

  getBikeDescription() {
    console.log(`It's ${this.getMaterial()} ${super.getType()} ${super.getName()}, with max speed ${this.getMaxSpeed()} km.`);

    return this;
  }
}

const ferrari = new SuperCar('Ferrari', 'sport coupe', 4);

ferrari
  .setDoorsCount(2)
  .setEngine('V12')
  .setEngineType('petrol')
  .setLuxury(true)
  .getFullDescription();

const bike = new Bike('Bike', 'Simple', 2, 'Iron', 30);

bike
  .setSize(2, 1)
  .getBikeDescription()
  .logBikeSize();
