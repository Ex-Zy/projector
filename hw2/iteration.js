function iterativeOddSumTo(number) {
  let sum = 0;

  for(let i = 1; i <= number; i++) {
    if (i % 2) {
      sum += i;
    }
  }

  return sum;
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25
