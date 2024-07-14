let score = "95";

console.log(typeof score);
//to convert a string into number

let valueInNumber = Number(score); //converted to number
console.log(typeof valueInNumber); //number

//but there is some issue.. let's check it ..with other values.

// "95" => 95
// "95sk" => NaN         but typeof operator still show it's type as number:  note: NaN means "Not a Number"
// true => 1;  false => 0
// 1 => true       0 = > false
// ""  => false
// "shazil" => true

//let's do some practice

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn); //Boolean conversion
// console.log(booleanIsLoggedIn); //true

// isLoggedIn = "shazil";
// console.log(booleanIsLoggedIn); //true

// isLoggedIn = "";
// console.log(booleanIsLoggedIn); //false

//now let's convert into string

let someNumber = 33;

let stringNUmber = String(someNumber); //type conversion
console.log(stringNUmber); //33
console.log(typeof stringNUmber);
