// declare variable based on the name of an object property
const myObject = { x: 2, y: 59, z: 699, a: 35, b: 68 };

const { x } = myObject;
console.log(x);

const myObject2 = { x1: 2, y: 59, z: 699, a: 35, b1: 68 };

const { x1, b1 } = myObject2;
console.log(x1, b1);

// destructuring array 
// prothom ta hobe prothom second ta hobe second...array er khetre position wise...........................
const [p, q] = [39, 40, 90, 244];
console.log(p, q);

const [best, faltu] = [45, 56];
console.log(best, faltu);

const [best2, faltu2] = ['momotaj', 'poroshi'];
console.log(best2, faltu2);

const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };


const company = {
   name: 'Gp',
   Ceo: {
      id: 1,
      name: 'ajmol', food: 'fuchka'
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
console.log(company.web.tech.third);
console.log(company?.backend?.tech?.third);
//(TypeError: Cannot read property 'tech' of undefined ) Error dibe... zodi na thake

// ei somossa somadhan korte hole (try catch diye ba ('?')ei chihno dite hobe)//mane optional chaining ...(mane paile zao na paile zaio na)..tahaole r error dibe na result undefind dekhabe.....?????????????????????????????????????????