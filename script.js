// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};
function SportsCar(make, model, topSpeed) {
  // Inheriting from Car prototype
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inheriting Car prototype into SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
