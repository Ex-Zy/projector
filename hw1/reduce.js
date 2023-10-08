const resultsArray = [1, 2, [3, [4]]];
const productOfArray = resultsArray.flat(Infinity).reduce((prev, next) => prev * next)

console.log(productOfArray); // 24
