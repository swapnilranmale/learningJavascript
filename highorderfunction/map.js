double = (a) => {
  return a * 2;
};

let a = [5, 1, 3, 5, 6];
let output = a.map(double);
// console.log(output);

percent = (arr1) => {
  return arr1.toString(2);
};
const arr1 = [10, 20, 30, 40];

const marks = arr1.map(percent);
// console.log(marks);

let arr2 = [2, 3, 4, 5];
let result = arr2.map(function (arr2) {
  return arr2 * 3;
});

console.log(result);

let cricketnumber = [1, 2, 43, 4];
let finalNumber = cricketnumber.map((cricketnumber) => {
  return cricketnumber * 10;
});

console.log(finalNumber);
