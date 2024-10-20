let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

// challenges 2
// let teaCollection = [];
// let tea;
// do {
//   tea = prompt(`Enter tea`);
//   if (tea != "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea != "stop");

let num = 1,
  total = 0;
do {
  total += num;
  num++;
} while (num <= 3);
// console.log(total);

let array = [2, 4, 6];
let mulArray = [];
array.map((element) => {
  mulArray.push(element * 2);
});
// console.log(mulArray);

let arrayOfCity = ["Paris", "New York", "London"],
  cityList = [];
for (let i = 0; i < arrayOfCity.length; i++) {
  cityList.push(arrayOfCity[i]);
}
console.log("CityList", cityList);
console.log("ArrayOfCity", arrayOfCity);
