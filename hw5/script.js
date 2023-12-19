// base set up
let isEnableDarkMode = false;
const toggleBtn = document.querySelector('#toggle-btn');
const description = document.querySelector('.description');

// handle enable/disable dark mode by click on button
toggleBtn.addEventListener('click', () => {
  if(isEnableDarkMode) {
    turnOff();
  } else {
    turnOn();
  }

  isEnableDarkMode = !isEnableDarkMode;
});

// get last saved mode(if was saved) from localStorage
setDarkMode();

function turnOn() {
  toggleBtn.innerHTML = 'Turn on';
  description.innerHTML = `Last turn off: ${formatDate(new Date())}`;
  document.body.classList.add('dark-theme');
  localStorage.setItem('dark-mode', 'true');
}

function turnOff() {
  toggleBtn.innerHTML = 'Turn off';
  description.innerHTML = `Last turn on: ${formatDate(new Date())}`
  document.body.classList.remove('dark-theme');
  localStorage.setItem('dark-mode', 'false');
}

function setDarkMode() {
  if(localStorage.getItem('dark-mode')) {

    if(localStorage.getItem('dark-mode') === 'true') {
      turnOn();
      isEnableDarkMode = true;
    } else {
      turnOff();
      isEnableDarkMode = false;
    }

  }
}


/**
 * Dates snippet https://bobbyhadz.com/blog/javascript-format-date-yyyy-mm-dd-hh-mm-ss
 */
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear()
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}
