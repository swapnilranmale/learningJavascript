let arr = [1, 2, 3, 4];
let sum = 0;
arr.forEach((i) => {
  sum = sum + i;
});
// console.log(sum);

let subjectMarks = [90, 60, 80, 98];

let totalMarks = subjectMarks.reduce((acc, cur) => {
  acc += cur;
  return acc;
}, 0);
console.log(totalMarks);
