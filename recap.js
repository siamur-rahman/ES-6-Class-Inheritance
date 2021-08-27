// No-1  let & const 
const hubby = 'omor sani';

let phone = 'iPhone 15';
phone = 'Samsung Galaxy s17';

// No-2 default parameter....||||||
/*function maxNumber(array) {
   const max = Math.max(...array);
   return max;
}
const biggest = maxNumber();
// console.log(biggest);

Eta vul...error khabo emty arry na dile..niche thik kore  likhlam */

function maxNumber(array = []) {
   const max = Math.max(...array);
   return max;
}
const biggest = maxNumber();
// console.log(biggest);
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// No-3 templete strings
const myNotes1 = `I am mojnu of ${hubby} . I dont have a laili.`
const myNotes = `I am mojnu of ${hubby} . I dont have a ${phone}.`
console.log(myNotes1);
console.log(myNotes);

// No-4  arrow function
const squre = x => x * x;
console.log(squre(9));
// normal function 
function squre(x) {
   return x * x;
}



