let arr = [20, 2, 1, 5, 100];
for (var i = 0; i <= arr.length; i++) {
  for (var j = i + 1; j <= i + 1; j++) {
    if (arr[i] > arr[j]) {
      console.log(arr[i]);
    }
  }
}
