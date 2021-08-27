class TeamMember {
   name;
   designation = 'Support Web Dev';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
}
class Support extends TeamMember {
   /* name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
       this.name = name;
       this.address = address;
    }*/
   groupSupportTime;
   constructor(name, address, time) {
      super(name, address);//super extension ....mane uporer level er super type er kichu 
      this.groupSupportTime = time;
   }
   startSession() {
      console.log(this.name, 'start a support session');
   }
}
class StudentCare extends TeamMember {
   /*name;
   designation = 'Student Care Web Deb';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }*/
   buildARoutine(student) {
      console.log(this.name, 'Build a routine for', student)
   }
}
class NeptuneDev extends TeamMember {
   /*   name;
   designation = 'Student Care Web Deb';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }*/
   CodeEditor;
   constructor(name, editor, address) {
      super(name, address);
      this.CodeEditor = editor;
   }
   releaseApp(version) {
      console.log(this.name, 'release app version', version)
   }
}

const aamir = new Support('Amir Khan', 'BD', 11);
const salman = new Support('Solaiman khan', 'Dubai', 4);
const sharukh = new Support('Shahrukh khan', 'Dubai');
const akshay = new Support('Akshay kumar', 'Dubai', 9);

const alia = new StudentCare('Alia Bhatt', 'Mumbai', 3);
const ash = new NeptuneDev('Assh riya', 'chennaii', 'android studio');
ash.releaseApp('1.2.5');

// aamir.startSession();
// salman.startSession();
// console.log(aamir, salman, sharukh, akshay);
console.log(aamir);
console.log(alia);
// console.log(ash);


/*///////////////////////step---1//////////////////
class Support {
   name;
   designation = 'Support Web Dev';
   address = 'BD';
   constructor(name, address) {
      //{ekhane constructor ekta function..(function ta likha zabe na)}

      this.name = name;
      this.address = address;
   }
   startSession() {
      console.log(this.name, 'start a support session');

   }
}

class StudentCare {
   name;
   designation = 'Student Care Web Deb';
   address = 'BD';
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }
   buildARoutine(student) {
      console.log(student.name, 'Build a routine for', student)
   }
}
class NeptuneDev {
   name;
   designation = 'Student Care Web Deb';
   address = 'BD';
   constructor(name, address) {
      //{onstructor hocche special function (eta construvtor e dite hobe)}
      this.name = name;
      this.address = address;
   }
   releaseApp(version) {
      console.log(student.name, 'release app version', version)
   }
}
const aamir = new Support('Amir Khan', 'BD');
const salman = new Support('Solaiman khan', 'Dubai');
const sharukh = new Support('Shahrukh khan', 'Dubai');
const akshay = new Support('Akshay kumar', 'Dubai');

const alia = new StudentCare('Alia Bhatt', 'Mumbai');

aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharukh, akshay);
console.log(alia);*/
