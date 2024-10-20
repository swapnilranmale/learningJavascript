makeTea = (typeOfTea) => {
  return `maketea: ${typeOfTea}`;
};

processOrder = (teaFunction) => {
  return teaFunction("earl grey");
};

let order = processOrder(makeTea);
console.log(order);
