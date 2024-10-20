let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

// challenges 2
let teaCollection = [];
let tea;
do {
  tea = prompt(`Enter tea`);
  if (tea != "stop") {
    teaCollection.push(tea);
  }
} while (tea != "stop");


