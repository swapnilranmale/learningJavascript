let arr = [1, 2, 4, 5, 9, 50, 500];
isLess = (arr) => {
  return arr > 10;
};

let less = arr.filter(isLess);
console.log(less);

let arr2 = [4, 5, 90, 2, 6, 8];
let oddResult = arr2.filter((i) => i > 3);
console.log(oddResult);
