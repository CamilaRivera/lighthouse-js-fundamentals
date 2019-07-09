function lastIndexOf(array, searchValue) {
  let indexLastTimeValue = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue) {
      indexLastTimeValue = i;
    }
  }

  return indexLastTimeValue;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);