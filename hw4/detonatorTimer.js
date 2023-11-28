detonatorTimer(3);
detonatorTimerWithTimeout(3);


function detonatorTimer(delay) {
  let timer = delay;

  const id = setInterval(() => {
    if(timer === 0) {
      console.log('BOOM!');
      return clearInterval(id);
    }

    console.log(timer--);
  }, 1000)
}

function detonatorTimerWithTimeout(delay) {
  let timer = delay;

 let id = setTimeout(function run() {
   if(timer === 0) {
     console.log('BOOM!');
     return clearTimeout(id);
   }

   console.log(timer--);

   id = setTimeout(run, 1000);
 }, 1000)
}
