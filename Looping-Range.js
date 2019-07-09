function range(start, end, step){
  let newArray = [];
  if(start === undefined || end === undefined || step === undefined || start > end || step === 0 || step < 0){
    return newArray;
  } else {
    let currentValue = start;
    newArray.push(currentValue);
    let currentIndex = 0;
    while( newArray[currentIndex] + step <= end){
      currentValue = currentValue + step;
      newArray.push(currentValue);     
      currentIndex++;
    }
    return newArray;
  }
}

console.log(range(0,10,2));
console.log(range(-5, 2, 3));
console.log(range(10, 30, 5));