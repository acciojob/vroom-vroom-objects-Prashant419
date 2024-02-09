// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
