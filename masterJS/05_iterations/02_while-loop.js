//While loop
//syntax:
//while(condition)
//{
//    statement(s)
//}

//if condition is true, statement(s) will be executed, if false, loop will break;

//let print tables(from 1 to 10) using while loop
let table = 1; //note: const' cannot be used here
while (table <= 10) {
  console.log(`\nTable of: ${table}`);
  let value = 1;
  while (value <= 12) {
    console.log(`${table} * ${value} = ${table * value}`);
    value++;
  }

  table++;
}

//do-While loop
//syntax:
//do
//{
//    statement(s)
//}
//while(condition)
//if condition is true, statement(s) will be executed, if false, the statement will be executed at once then loop will break;

let i = 5;
{
  i = 6; //note: let cannot be redeclared inside the block . but it can be reassigned: => let is a block scope variable
  console.log(`${i}`);
}
console.log(`${i}`);

//var can be redelcared and re assigned

//important
// const can neither be redeclared nor reassigned inside (block scope)
// let can be reassigned but not redeclared inside the block (block scope)
// var can be re declared and reassigned isnide the block  (global scope)

//ok now let's print values of array using while loop
const greatLeaders = [
  "Muhammad(pbuh)",
  "Abu Bakkar(rz)",
  "Umar(rz)",
  "Uthman(rz)",
  "ALI(rz)",
];

let arr = 0;
while (arr < greatLeaders.length) {
  console.log(`Hazrat ${greatLeaders[arr]}`);
  arr++;
}

//let's work with do-while loop

let score = 11;
do {
  console.log(`Your score is ${score}`);
  score++;
} while (score <= 10);

//output: Your score is 11;
//note: as the condition is false so it runs only once
