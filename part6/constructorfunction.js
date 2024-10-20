function Car(make, model) {
  this.make = make;
  this.model = model;
}
let MyCar = new Car("Tata", "Safari");
let MyCar1 = new Car("Tata", "Safari");
// console.log(MyCar);
// console.log(MyCar1);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `tea ${this.type}`;
  };
}
let tealemon = new Tea("Lemo");
// console.log(tealemon.describe());

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes sound`;
};
let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());
