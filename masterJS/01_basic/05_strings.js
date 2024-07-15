const name = "Shazil";
const repoCount = 10;

//console.log(name + repoCount + "so on");      => avoid it as it's not a good practice now

console.log(`Hi, My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Brother_in_Arms"); //=> as string is also an object. so we can also declare it like this using "new" keyword

console.log(gameName[0]); //B     =>to access keyvalue

console.log(gameName.__proto__); //=> we can access prototype

// Some string methods (functions)

console.log(gameName.length); // to get the length of
console.log(gameName.toUpperCase); //uppercase
console.log(gameName.toLowerCase); //lowercase
console.log(gameName.trim); //trim the string

console.log(gameName.charAt(2)); //check which character is in the give position
console.log(gameName.indexOf("t")); //check the position of the given character

const newString = gameName.substring(0, 7); //divide into substring
console.log(newString);

const anotherString = gameName.slice(-13, 7); //we can use negative values in slice. but not in substring
console.log(anotherString);

const newStringOne = "     Shazil    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //remove spaces

const url = "https://shazil.com/shazil%20khan";

console.log(url.replace("%20", "-")); //replace the value in string

console.log(url.includes("shazil")); // check if the given value is in the string

console.log(gameName.split("_")); //split the string using the given value
