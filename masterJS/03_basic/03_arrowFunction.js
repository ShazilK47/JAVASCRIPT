//in browser the global object is "window"
//and in node the gobal object is "{}"

//'this' keyword refer to current context
//in browser the current context is "window"
//in node the current context is "{}"

//'this' works in objects and functions inside objects but not in functions
//'this' keyword cannot used in arrow function

// ok now let's check it

const user = {
  username: "Shazil",
  price: 1000,

  welcomeMessage: function () {
    console.log(`Welcome ${this.username} to the course`); //here this keyword represent the current context
    console.log(this); //prints the current object
  },
};

console.log(user.welcomeMessage());
user.username = "Abdullah";
console.log(user.welcomeMessage());

console.log(this); // {}

const chai = () => {
  console.log(this); // {}
};

console.log(chai());

//arrow function initilization

const addNums = (num1, num2) => {
  return num1 + num2; //explicit return
};

const subNums = (num1, num2) => num1 - num2; // implicit return

// const multNum = (num1, num2) => (num1 * num2);  => most useful in react: implicit return

//to return object
const objreturn = () => ({ username: "shazil" });
console.log(objreturn());
