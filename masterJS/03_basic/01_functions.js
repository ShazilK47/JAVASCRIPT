// function in JS

//syntax
// function name(parameter1, parameter2, parameter3){
//     //code to be executed
//     return value;
// }

function add(num1, num2) {
  //paramters
  return num1 + num2;
}

//add => reference
//() => execution
//add();   => reference + execution: to execute function

let addition = add(4, 6); //arguments
console.log(addition); //10

//what if we pass empty string or null

console.log(add(2, "")); //2
console.log(add(2, "4")); //24
console.log(add(2)); //NaN
console.log(add("2", "3")); //23
console.log(add(2, null)); //2

//functions with arrasy and objects

function addArrayValues(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(addArrayValues([4, 5, 3, 5, 6]));

//let's check another example
//if we have to give number of argumants we don't know how much then we use
// Rest Operator   (...)
//Note: the Rest parameter must be the last parameter

//syntax
// function name(parameter1, parameter2, ...parameter3){
//     //code to be executed
//     return value;
// }

function calculateCartPrice(item1, item2, ...item) {
  let total = 0;
  for (let i = 0; i < item.length; i++) {
    total += item[i];
  }
  return total + item1 + item2;
}

let totalPrice = calculateCartPrice(20, 10, 100, 200, 300, 20);
console.log(totalPrice);

//now let's pass an object as an argument

let user = {
  username: "Shazil Khan",
  password: "12345",
};

function handleObject(anyobject) {
  console.log(anyobject.username);
  console.log(anyobject.password);
  console.log(anyobject);
}

handleObject(user);
