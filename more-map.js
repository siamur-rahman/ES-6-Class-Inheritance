const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
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
/*loop chalaia product paichi..erpr product gula dekhchi...ekta array er moddhe*/



products.map(product => console.log(product.name));
/*zodi product er name dei{mane console.log(product.name)dei} taile string akare ashe karon loop chalaia product paichi erpor product er name gula console log korchi

(age map korchi,, map theke result paia tader name dekhtechi tai string)
*/
const productsNames = products.map(product => product.name);
console.log(productsNames);
/*ekhane string akare ashe na karon ekhane loop chalaichi erpor map korchi ...oitai dekhte console.log korchi....R map always ekta array dibe tai array er vitore
product pabo
(map korchii,,erpor map er result k dekhchi tai array pabo)*/


const productsPrices = products.map(product => product.price);
// console.log(productsPrices);

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.name));

// arrow function sorasori return kore ..;;;;;;;
//( zokhon return lagbe na tokhon forEach use kora lagbe)forEach onekta for loop er motoi.../////****************/  
// map & forEach er moddhe difference hocche map[pura kaj ta kore ekta array hisebe return korbe] return korbe forEach return korbe na ....