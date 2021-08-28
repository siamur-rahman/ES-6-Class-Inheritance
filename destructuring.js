const fish = { id: 101, name: 'king hilsha', price: 9000, phone: '01755555555', address: 'chadpur', dress: 'silver' };
/*
system-1 ...................
const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id;
const name = fish.name

console.log(phone, price);
console.log(phone, dress);
console.log(phone, id);
console.log(phone, name);
console.log(phone)
*/

/*//system-2 (short method)..................
// const { phone, price, dress, id, name } = { id: 101, name: 'king hilsha', price: 9000, phone: '017555555', address: 'chadpur', dress: 'silver' };

const { phone, price, dress, id, name } = fish;

console.log(phone, price);
console.log(phone, dress);
console.log(phone, id);
console.log(phone, name);
console.log(phone);*/

/*
const company = {
   name: 'GP',
   Ceo: {
      id: 1,
      name: 'ajmol', food: 'fuchka'
   },
   web: { work: 'website development', employee: 22, framework: 'react' }
}

// /////////////system-1....................
// const work = company.web.work;
// const framework = company.web.framework;

// //////////system-2 (short).....................
const { work, framework } = company.web;
const { food } = company.Ceo;

console.log(work, framework, food);*/


const company = {
   name: 'GP',
   Ceo: {
      id: 1,
      name: 'ajmol',
      food: 'fuchka'
   },
   web: {
      work: 'website development',
      employee: 22,
      framework: 'react',
      tech: {
         first: 'html',
         second: 'css',
         third: 'js'
      }
   }
}
const { second, third } = company.web.tech;
// zake dorkar take {bame}=zar vitore she ache tar ba tader nam/(company er vitore web er vitore tech er vitore second and third ache)....
console.log(second, third);