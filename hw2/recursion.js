function recursiveOddSumTo(number) {
  if(number === 1) return 1;

  if(number % 2 === 0) {
    return recursiveOddSumTo(number - 1);
  }

  return number + recursiveOddSumTo(number - 2);
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25
