let balance = 120;
let anotherBalance = new Number(300);
console.log(typeof balance);
console.log(typeof anotherBalance);
console.log(typeof anotherBalance.valueOf());
console.log("****************");
console.log(balance);
console.log(anotherBalance);

//boolean
let isActive = true;
console.log(isActive);

let isReallyActive = new Boolean(true);
console.log(isReallyActive);

console.log(typeof isActive);
console.log(typeof isReallyActive);

//null and Undefined

let firstName;
console.log(firstName);

let lastName = null;
console.log(lastName);

let middleName = undefined;
console.log(middleName);

//string
let myString = "Hello";
let myStringOne = "Hola";
let concatedString = myString + " " + myStringOne;
console.log(concatedString);

let name = "swapnil";
console.log(`Hello ${name}`);

let sm1 = Symbol("Swapnil");
let sm2 = Symbol();
console.log(sm1 == sm2);

console.log(sm1);
