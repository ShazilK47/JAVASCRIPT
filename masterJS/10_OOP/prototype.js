// let myName = "shazil   ";

// console.log(myName.length);
// console.log(myName.trueLength());

let myHeros = ["Ali", "Umar", "Usman", "Abu bakr"];

let heroPower = {
  Ali: 100,
  Umar: 200,
  Usman: 300,
  Abu_bakr: 400,

  getUmerPower: function () {
    console.log(`Eman power is ${this.Umar}`);
  },
};

//object

Object.prototype.shazil = function () {
  console.log(`Shazil is present in all objects`);
};

Array.prototype.heyShazil = function () {
  console.log(`Shazil says hello`);
};

//if we enject some property or method in object. then i can be saved in prototype and can be accessed by objects and arrays and...

// heroPower.shazil();
myHeros.shazil();
myHeros.heyShazil();
// heroPower.heyShazil(); //error: heroPower doesn't have access to heyShazil coz it was injected in the array. and can't be access by the object

//inheritance: (old one)

const User = {
  name: "shazil",
  email: "shazil@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User; //prototypal inheritance

//inheritance: (modern syntax)
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "shazil Khan      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);

  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
