const score = 400;
console.log(score); //400

const balance = new Number(100); //explicity define the type number
console.log(balance); // [Number:100]
console.log(typeof balance); //object

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00    => to define a fixed number of value after decimal

const otherNumber = 76.98482;

console.log(otherNumber.toPrecision(3)); //gives roundoff value

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString("en-IN")); //indian format

//note:
//1. toFixed() and toPrecision() are not same
//2. toFixed() is used to define the number of decimal places after the decimal point
//3. toPrecision() is used to define the number of significant digits in the number

//other notes: for (Number)
// Max_Value = 1.7976931348623157e+308
// Min_Value = 5e-324
// Max_safe_integer = 9007199254740991
// Min_safe_integer = -9007199254740991

//------------------------------------------------------------------------------------------------------------------------------------------
//************************************************** Maths **************************************************************

console.log(`\n\t Maths `);

//Math is the builtin library in JavaScript
//Math is a global object, so we can access it directly without creating an object of Math class

// Some Maths Operations
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045
console.log(Math.SQRT2); //1.4142135623730951
console.log(Math.SQRT1_2); //0.7071067811865476

// 1. Math.abs() => returns the absolute value of a number: i.e make it positive
console.log(Math.abs(-10)); //10
console.log(Math.abs(10)); //10

// 2. Math.ceil() => returns the smallest integer greater than or equal to a number
console.log(Math.ceil(10.1)); //11
console.log(Math.ceil(10.9)); //11

// 3. Math.floor() => returns the largest integer less than or equal to a number
console.log(Math.floor(10.1)); //10
console.log(Math.floor(10.9)); //10

// 4. Math.round() => returns the value of a number rounded to the nearest integer
console.log(Math.round(10.1)); //10
console.log(Math.round(10.9)); //11

// 5. Math.sqrt() => returns the square root of a number
console.log(Math.sqrt(9)); //3

// 6. Math.pow() => returns the value of a number raised to the power of another
console.log(Math.pow(2, 3)); //8

// 7. Math.min() => returns minimun values
console.log(Math.min(1, 2, 3, 4, 5, 7)); //1

// 8. Math.max() => returns the maximum value
console.log(Math.max(1, 2, 3, 4, 5, 9)); //9

//Math.random => give any random value between 0 and 1
console.log(Math.random()); //0.123456789

//some tricks
console.log(Math.random() * 10 + 1); //give values between 1 and 10

console.log(Math.random() * 100 + 1); //give values between 1 and 100

console.log(Math.floor(Math.random() * 10 + 1)); //gives intiger value between 1 and 10

//A technique to find random values between any numbers

const max = 10;
const min = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
