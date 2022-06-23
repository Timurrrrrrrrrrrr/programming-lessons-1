class Car{
    constructor(options) {
      this.doors = options.doors || 4;
      this.state = options.state || 'brand new';
      this.color = options.color || 'white';
    }
  }
//создание класса truck
  class Truck {
    constructor(options) {
      this.doors = options.doors || 4;
      this.state = options.state || 'used';
      this.color = options.color || 'black';
    }
  }
//объявление класса VehicleFactory
  class VehicleFactory {
    createVehicle(options) {
      if(options.vehicleType === 'car') {
        return new Car(options);
      } else if(options.vehicleType === 'truck') {
        return new Truck(options);
        }
    }
  }
//создан объект factory класса VehicleFactory
const factory = new VehicleFactory();
const car = factory.createVehicle({
    vehicleType: 'car',
    doors: 4,
    color: 'silver',
    state: 'Brand New'
});
const truck = factory.createVehicle({
    vehicleType: 'truck',
    doors: 2,
    color: 'white',
    state: 'used'
});
// Выводит Car {doors: 4, state: "Brand New", color: "silver"}
console.log(car);
// Выводит Truck {doors: 2, state: "used", color: "white"}
console.log(truck);