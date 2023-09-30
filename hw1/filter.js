const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

const filteredNames = userNames.filter(n => {
  return ['е', 'ю', 'і', 'я', 'а', 'о'].includes(n[0].toLowerCase())
});

const filteredNamesWithIf = userNames.filter(n => {
  const letter = n[0].toLowerCase();

  if(
    letter === 'е' ||
    letter === 'ю' ||
    letter === 'і' ||
    letter === 'я' ||
    letter === 'а' ||
    letter === 'о'
  ) {
    return true;
  }
  return false;
});

const filteredWithMap = userNames.filter(n => {
  const lettersMap = {'е': 1, 'ю': 1, 'і': 1, 'я': 1, 'а': 1, 'о': 1};
  return lettersMap[n[0].toLowerCase()];
});

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNamesWithIf); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredWithMap); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
