
const numbers2 = [5, 23, 7, 49, 79, 2, 30, 5, 19];
const equalNumbers2 = numbers2.map(number => number < 20);
// console.log(equalNumbers2);//(map tai just true ba false bole but filter result dei)

/* //map er kaj hocche  prottekta element er jonno kichu ekta kaj kore result amaderke dibe...seta ekta array dei(prottekta element nibe/setar upor kichu ekta korbe/kore oitar j result hobe seta ekta array er moddhe rekhe total array ta dibe)

// filter er kaj hocche ekta cheak point (shorto thakbe)thakbe zekhane kawre nibo kaore nibo na......*/
const numbers = [5, 23, 7, 49, 79, 2, 30, 5, 19];
const equalNumbers = numbers.filter(number => number == 20);
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
console.log(equalNumbers);
console.log(bigNumbers);
console.log(smallNumbers);

const products = [
   { name: 'water bottle', price: 50, color: 'yellow' },
   { name: 'mobile phone', price: 1500, color: 'black' },
   { name: 'smart watch', price: 500, color: 'black' },
   { name: 'sticky note', price: 30, color: 'pink' },
   { name: 'water glass', price: 10, color: 'white' }
]
const expensive1 = products.map(product => product.price > 100);
console.log(expensive1);//true false dibe array er moddhe

const expensive = products.filter(product => product.price > 100);
console.log(expensive);//result dibe array er moddhe

const pinks = products.filter(product => product.color == 'pink');
console.log(pinks);

const blue = products.filter(product => product.color == 'blue');
// console.log(blue);


/*  //////////////////// Find/////////////////////
filter ekta Array dibe...sob upadan thakle sob dibe...na thakle ekta empty array...
find sorasori element dibe.....
find onkgula thakle prothom ta dibe ....element hisebe dibe 
na thakle undefind dibe*/

/*NIJE TRY KORLAM
const blue20 = products.map(product => product.color == 'blue');
console.log(blue20);//false dibe array er moddhe zoto upadan toto ta false

const blue21 = products.filter(product => product.color == 'blue');
console.log(blue21);//empty array dibe (KAOKE PAINAI TAI,,,EKTA PELEO EKTA K ARRAY ER MODDHE DIBE)

const blue22 = products.find(product => product.color == 'blue');
console.log(blue22);// upadan dibe...(nai tai undefind dibe)

const blue221 = products.find(product => product.color == 'black');
console.log(blue221);//upadan DIBE(ache tai prothom ta dibe aLWAYS)
*/

const whiteItem = products.find(product => product.color == 'pink');
// console.log(whiteItem);
const whiteItem2 = products.find(product => product.color == 'pi');
// console.log(whiteItem2);

