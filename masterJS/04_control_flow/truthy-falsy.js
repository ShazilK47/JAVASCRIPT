//some values are considered as true and some as false

//falsy values
//0
//-0
//Bigint => 0n
//""
//null
//undefined
//NaN
//false

//truthy values
//anything else
// "0"
// "false"
// " "
// []
// {}
// -1
// function() {}

//if we want to check if a value is truthy or falsy we can use the
//Boolean() function

const userEmail = "shazil@google.ai";
if (userEmail) {
  //it by default consider as truthy value
  console.log("Welcome shazil");
} else {
  console.log("Please provide your email address");
}

//to check empty arrays. we should check like this
const users = ["Shazil", "Abdullah", "Imran"];
if (users.length === 0) {
  console.log(`Array is empty`);
}

//for empty object
const emptyObj = {};
if (Object.keys(emptyObj) == 0) {
  console.log(`Object is empty`);
}

//some other practices
// false == 0          => true
// false == ""          => true
// 0 == ""            => true

//Logical Operators
//And => &&
//Or  => ||
//Not => !

//Nullish Coalescing Operator: ??  => null, undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); //5;

val1 = null ?? 10;
console.log(val1); //10;

val1 = undefined ?? 15;
console.log(val1);

val1 = null ?? 10 ?? 20;
console.log(val1); //10;

//var2 = undefined ?? 10; => undefined

// Ternary Operator
// Syntax:  condition ? true : false;

let price = 100;
price > 80 ? console.log(`Greater then 80`) : console.log(`Less then 80`);
