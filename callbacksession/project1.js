// setTimeout(() => {
//   console.log("set time out function");
// }, 2000);
// function x(y) {
//   console.log("X");
//   y();
// }
// x(function (y) {
//   console.log("y");
// });
let a = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked", a++);
});
