// const tinder = new Object();       => signleton object

// const tinder = {};                => empty object

const tinderUser = {};

tinderUser.id = 89;
tinderUser.name = "Shazil Khan";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
  email: "shazil@gmail.com",
  fullname: {
    //object inside object : nested object
    userfullname: {
      firstname: "Shazil",
      lastname: "Khan",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//to combine object 1 and object 2
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2); //it's better to have 3 parameters

//3. spread operator

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//Array of objects    : => mostly used when value save in database

const users = [
  { name: "shazil", email: "shazil@gmail.com" },
  { name: "Abdullah", email: "abdullah@gamil.com" },
  {},
  {},
];
//now to access objects
console.log(users[1].email);

//to get object keys and values as an array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//to check the given property is in the object or not
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
