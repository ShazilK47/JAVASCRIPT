// ## for of
//syntax:
//for (variable of iterable) {
//    statement
//}
//variable is assigned the value of the next property in the object
//iterable is the object being iterated over

//note: we cannot use 'for of" loop over object. as objects are not itterable

// let's do an example

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of Numbers) {
  console.log(num);
}

//we can also do it with string
const str = "Hello World!";

for (let alpha of str) {
  console.log(alpha);
}

// ## for in:
//syntax:
//for (variable in object) {
//    statement
//}

//To print values in objects
// Note: object is not itterable      : so we cannot use for of loop in object

let programmingLang = {
  JS: "JavaScript",
  TS: "TypeScript",
  PHP: "Hypertext Preprocessor",
  PY: "Python",
};

for (let key in programmingLang) {
  console.log(`${key} is shortcut for ${programmingLang[key]}`);
}

//can we use for in over arrays?
//yes we can but it will print index of array

let evenNums = [2, 3, 4, 6, 6, 10];
for (let nums in evenNums) {
  console.log(`${nums}: ${evenNums[nums]}`);
}
