const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];


const map = userNames.map(fullName => fullName.split(' ').map(word => word[0]).join('.'));

console.log(map); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
