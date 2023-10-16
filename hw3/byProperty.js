const movies = [
  {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
  },
  {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
  },
  {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
  },
  {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
  },
];

console.log([...movies].sort(byProperty('releaseYear', '>')));
console.log([...movies].sort(byProperty('runningTimeInMinutes', '<')));
console.log([...movies].sort(byProperty('movieName', '>')));

function byProperty(property, direction) {
  return function (a, b) {
    // sort numbers
    if(typeof a[property] === 'number') {
      return direction === '>' ? a[property] - b[property] : b[property] - a[property];
    }

    // sort alphabetically
    return direction === '>' ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property])
  }
}
