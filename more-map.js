const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brandy', 'Tom Solaiman'];
const flengths = friends.map(friend => friend.length);
console.log(flengths);

const products = [
   { name: 'water bottle', price: 50, color: 'yellow' },
   { name: 'mobile phone', price: 1500, color: 'black' },
   { name: 'smart watch', price: 500, color: 'black' },
   { name: 'sticky note', price: 30, color: 'pink' },
   { name: 'water glass', price: 10, color: 'white' }
]
products.map(product => console.log(product));

const productsName = products.map(product => product.name);
console.log(productsName);

const productsPrices = products.map(product => product.price);
console.log(productsPrices);

products.forEach(product => console.log(product));

// arrow function sorasori return kore ..;;;;;;;
//( zokhon return lagbe na tokhon forEach use kora lagbe)forEach onekta for loop er motoi.../////****************/
// map & forEach er moddhe difference hocche map[pura kaj ta kore ekta array hisebe return korbe] return korbe forEach return korbe na ....