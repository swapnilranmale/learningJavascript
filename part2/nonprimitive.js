let username = {
  firstName: "swapnil",
  email: "info@gmail.com",
  dob: "29 jan 2024",
  phone: 9021190242,
  isLoggedIn: true,
};

username.firstName = "rohit";
console.log(username);

console.log("Firstname " + username.firstName);

console.log(typeof username);

console.log(typeof username.phone);

console.log(typeof username.isLoggedIn);

console.log("********Varibale name using space************");

let subject = {
  "sub name": "English",
};
console.log(subject["sub name"]);

let today = new Date();
console.log(today.toTimeString());
console.log(today.toDateString());
console.log(today.getDate());
console.log(today.getDay());

//Array
let array = ["a", "b", "c", ["mango", "apple"]];
console.log(array);
console.log(typeof array);
console.log(array[1]);
console.log(array[3]);

let isValue = false;
console.log(typeof Number(isValue));
