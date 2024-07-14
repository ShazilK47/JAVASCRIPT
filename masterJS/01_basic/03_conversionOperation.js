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
// console.log(stringNUmber); //33
// console.log(typeof stringNUmber);

// ************************* Operations ********************************
let value = 5;
let negValue = -value; // -5

//basic arthematic operations
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);    => to raise to the power 3
//console.log(2/2);
//console.log(2%2);      => modulas/remainder of 2

// let str1 = "Hello";
// let str2 = " Shazil";

// let str3 = str1 + str2; // concatinate
// console.log(str3); //Hello Shazil.

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(ture); //true
// console.log(+true); //1
// // console.log(true+);   //error

// console.log(+""); //0          => + converts string to boolea
// console.log(+"1"); //1          => + converts string to boolea

//prefix and postfix operator
let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

//example
let x = 3;
const y = x++         //it first assign the value of x to y and then increment the value of x
console.log(`x: ${x}, y: ${y}`);  
//output: x:4 , y:3

let a = 3;
const b = ++3;       //this first increament the value of a and then assign in the b
console.log(`a: ${a}, b: ${b}`); 
//output: a:3 , b:4


//link to study
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
