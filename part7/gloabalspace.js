// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var yval = x();
// console.log(yval);

// yval();

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("js settimeout");
}
x();
