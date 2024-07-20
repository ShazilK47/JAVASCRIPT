//Scope in JS

//# Topics
//Global Scope
//Local Scope

//Lexical Scope
//Scope Chain
//Hoisting

//Scope

//Globae Scope
{
  //Local scope: within the scope
}

//Note:
// let and const are block scope
// var is a globle scope

//let's do an example

let a = 20;
const b = 30;
var c = 32;

if (true) {
  let a = 30;
  const b = 50;
  var c = 40;
}

console.log(a); //20
console.log(b); //20
console.log(c); //40

//Note that the values in a and b does'nt effected by the values declared inside the conditional scope
//but the value c is changed because var is a global scope
