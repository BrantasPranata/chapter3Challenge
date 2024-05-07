// Base class representing a generic car
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    // Abstraction: Method to start the car (abstracted as "starting engine")
    start() {
      console.log(`${this.make} ${this.model} (${this.year}) engine started.`);
    }
  
    // Encapsulation: Method to get car details
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  
    // Polymorphism: Method to accelerate
    accelerate(speedIncrement) {
      this.speed += speedIncrement;
      console.log(`The ${this.make} ${this.model} is accelerating to ${this.speed} km/h.`);
    }
  
    // Polymorphism: Method to stop
    stop() {
      this.speed = 0;
      console.log(`The ${this.make} ${this.model} has stopped.`);
    }
  
    // Polymorphism: Method to describe car
    describe() {
      console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
    }
  }
  
  // ToyotaCar class extends Car
  class ToyotaCar extends Car {
    constructor(model, year) {
      super("Toyota", model, year);
    }
  
    // Polymorphism: Override describe method for Toyota cars
    describe() {
      console.log(`This is a Toyota ${this.model} (${this.year}).`);
    }
  }
  
  // HybridCar class extends Car
  class HybridCar extends Car {
    constructor(make, model, year) {
      super(make, model, year);
      this.batteryLevel = 100;
    }
  
    // Encapsulation: Method to get battery level
    getBatteryLevel() {
      return this.batteryLevel;
    }
  
    // Polymorphism: Override accelerate method for Hybrid cars
    accelerate(speedIncrement) {
      if (this.batteryLevel > 0) {
        super.accelerate(speedIncrement);
        this.batteryLevel -= 10;
        console.log(`Battery level: ${this.batteryLevel}%`);
      } else {
        console.log("Battery empty. Please charge the car.");
      }
    }
  
    // Polymorphism: Method to charge the car
    charge() {
      this.batteryLevel = 100;
      console.log(`The ${this.make} ${this.model} has been charged.`);
    }
  }
  
  // Creating instances of Toyota and Hybrid cars
  const camry = new ToyotaCar("Camry", 2023);
  const prius = new HybridCar("Toyota", "Prius", 2022);
  
  // Accessing properties and methods
  console.log(camry.getDetails()); // Encapsulation
  camry.start(); // Abstraction
  camry.accelerate(60); // Polymorphism
  camry.describe(); // Polymorphism
  
  console.log(prius.getDetails()); // Encapsulation
  prius.start(); // Abstraction
  prius.accelerate(50); // Polymorphism
  prius.charge(); // Polymorphism
  