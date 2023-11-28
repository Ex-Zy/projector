function someFunction(a, b) {
  return a + b;
}

function slower(func, seconds) {
  return (...params) => {
    console.log('Chill out, you will get you result in 5 seconds');

    setTimeout(() => {
      console.log(func.apply(null, params));
    }, seconds * 1000)
  }
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(2, 3);
