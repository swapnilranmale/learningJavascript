let a = 123;
console.log(typeof a);
let b = "Javascript";
console.log(typeof b);

let message;
function Greet(message) {
  console.log("Heyy" + message);
}
Greet("Swapnil");
/*

String
Boolean
Number
Bigint(Big Integer)

undefined - no defination
null = empty/nothing 

Object

Symbol

*/

let score = 102;
let name = "chai or code";
let isLoggedIn = false;

//Object
let object = {
  fname: "John",
  lname: "Doe",
};

console.log(object.fname);

let teaTypes = ["lemon tea", "orange tea", "oolong tea"];
console.warn(teaTypes[1]);
console.log("***Types of tea***");
console.log(teaTypes);

let datetime = {
  date: Date.now(),
};

console.log(datetime.date);

const start = Date();
console.log(start);

let getScore = score;
console.log(getScore);
