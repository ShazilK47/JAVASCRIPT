//let's check

function multiply(num1, num2) {
  return num1 * num2;
}

multiply.power = 3;

console.log(multiply(2, 3));
console.log(multiply.power);
console.log(multiply(2, 3).power); //undefined
console.log(multiply.prototype); // {}

//possibly funciton can also be reference to an object

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`The score is ${this.score}`);
};

let userone = new createUser("shazil", 33);
let usertwo = new createUser("abdullah", 22);
console.log(userone.increment());
console.log(usertwo.printMe());

/* 
  Here's what happened behind the seen when the new keyword is used
  1. A new object is created and assigned to the variable
  2. The object's prototype is set to the prototype of the function that was called
  3. The function is called with the new keyword, and the object is passed as the
  context of the function (this keyword)
  4. The function returns the object, or if it doesn't return anything, the object
  is returned by default

  A new object is created: the new keyword initiates the creation of a new JavaScript Object.


  A prototype is linked: The newly created object gets linked to the prototype property of the 
  constructor function. This means that it has access to properties and methods defined on the 
  constructor's prototype.

  The constructor is called: The constructor function is called with the specified arguments and this 
  is bound to the newly created object. If no explicit return value is specified from the constructor,
  JavaScript assumes this, the newly created object, to be the intended return value.

  The new object is returned: After the constructor function has been called, if it doesn't
  return a non-primitive value(object, array, function , etc), the newly created object is returned.

*/
