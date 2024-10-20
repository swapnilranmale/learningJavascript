let typesOfTea = ["green tea", "black tea", "chai", "oolong tea"];
let newArray = [];
for (i = 0; i <= typesOfTea.length; i++) {
  if (typesOfTea[i] === "chai") {
    continue;
  }
  newArray.push(typesOfTea[i]);
}
console.log(typesOfTea);
console.log(newArray);
