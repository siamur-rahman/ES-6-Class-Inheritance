/*////////////////////////////   ||| STEP----1 |||  ////////////////////

class Support {
   name;
   designation = 'Support Web Dev';
   startSession() {
      console.log('start a support session');

      /////////////////////////////////////////comment//////////////////////////////////////eta(startSession) ekta function(class er vitore function likha zai tobe  function keyword likha zabe na...sorasori function er nam likha lagbe///Suport t aekta class)
      ////////////////////////////////////////comment///////////////////////////////
   }
}
const aamir = new Support();
console.log(aamir);*/

/*//////////////////////////////STEP-222/////////////////////////////////
class Support {
   name;
   role = 'Support Web Dev';
   address = 'BD';
   startSession() {
      console.log('start a support session');
   }
}
const aamir = new Support();
console.log(aamir);*/
// object banaite hole object er ekta nam dite hobe......ekhane nam (aamir)/////////////////




/*STEP-3//////////////////
class Support {
   name;
   role = 'Support Web Dev';
   address = 'BD';
    constructor(name) {
      this.name = name
 /////////////////class start korar ekta function constractor (special ekta function)//////////
   }

   startSession() {
      console.log('start a support session');
   }
}
const aamir = new Support();
const salman=new Support();
console.log(aamir);*/
/*STEP-44/////////////////////////////////////
class Support {
   name;
   role = 'Support Web Dev';
   address = 'BD';
   constructor(name) {
      this.name = name
   }
   startSession() {
      console.log('start a support session');

   }
}
const aamir = new Support('Amir Khan');
const salman = new Support('Solaiman khan');
console.log(aamir);
console.log(salman);*/

/*
// STEP-5////////////////..................
class Support {
   name;
   designation = 'Support Web Dev';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
   startSession() {
      console.log('start a support session');

   }
}
const aamir = new Support('Amir Khan', 'BD');
const salman = new Support('Solaiman khan', 'Dubai');
console.log(aamir);
console.log(salman);*/

// STEP-6////////////////..................
class Support {
   name;
   role = 'Support Web Dev';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
   startSession() {
      console.log(this.name, 'start a support session');
   }
}
const aamir = new Support('Amir Khan', 'BD');
const salman = new Support('Solaiman khan', 'Dubai');
const sharukh = new Support('Shahrukh khan', 'Dubai');
const akshay = new Support('Akshay kumar', 'Dubai');

aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharukh, akshay);
// console.log()

// class er vitore kon property access korte chaile (this.) diye access kora zai this.name this.address this.id 