const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

function optimizer(data) {
  const mappedEntries = Object.entries(data).map(([key, value]) => [key.toLowerCase(), Number(value).toFixed(2)]);

  return Object.fromEntries(mappedEntries);
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
