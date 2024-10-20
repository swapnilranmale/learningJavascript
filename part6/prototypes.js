let computer = { cpu: 12 };
// console.log(`computer`, computer.__proto__);

let lenovo = {
  screen: "HD",
  __proto__: computer,
};

// console.log(`lenovo`, lenovo.__proto__);

let genericCar = {
  wheels: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, Object.getPrototypeOf(tesla));
    
console.log(`tesla`, tesla.hasOwnProperty("driver"));
