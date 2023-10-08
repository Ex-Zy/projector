const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

const filteredNames = userNames.filter(name => {
  const letter = name[0].toLowerCase();
  return ['е', 'ю', 'і', 'я', 'а', 'о'].includes(letter)
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

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNamesWithIf); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
