// singleton
//what is singleton?
// A Singleton in JavaScript is a design pattern that restricts the instantiation of a class to a single instance. This means that only one object can be created from a Singleton class,
//  and any subsequent attempts to create an object from the same class will return the same instance.

// if we declare object using constructor then it will be singleton .
// but if we declare object using object literal then it will not be singleton
// because we can create multiple object using object literal.
// so we can use constructor to create singleton object.

// # Two ways to declare objects in JS
//1. Using constructor       2.Using Literal

// 1. Using constructor
// Object.create()

//2. Object Literals

const JSUser = {
  name: "Shazil Khan",
  age: 21,
  email: "shazil@gmail.com",
  location: "Karachi",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

//Note: the object keys are by default strings

//to access object properties
//there are to ways
//1. dot notation
// JSUser.name

//2. bracket notation
// JSUser["name"]

console.log(`Name: ${JSUser.name}`);
console.log(`Email: ${JSUser["email"]}`);

//how to use symbol as a key in object

// const symbol = Symbol("key");
// const obj = { [symbol]: "value" };

const password = Symbol("key1");
const logIn = {
  Name: "Shazil",
  [password]: "12345", //declare symbol as a key in an object using square brackets
};
console.log(logIn);
console.log(`Name: ${logIn["Name"]}`);
console.log(`Password: ${logIn[password]}`);
