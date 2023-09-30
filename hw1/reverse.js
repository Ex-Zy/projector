const currentMaxValue = 4589;
const reverseMaxValue = +`${currentMaxValue}`.split('').reverse().join('');

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'
