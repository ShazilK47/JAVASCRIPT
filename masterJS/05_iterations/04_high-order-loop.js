//High order array loops
//forEach
//map
//filter
//reduce

//1. forEach
//forEach() method calls a function for each element in an array.
//The function is called for each element in the array.
//The forEach() method does not return a value.
//forEach() method does not change the original array.
//forEach() method is not supported in Internet Explorer 8 and earlier versions.

let proLang = ["Python", "JavaScript", "Java", "C++", "C#"];

proLang.forEach((lang) => {
  console.log(`${lang.indexOf()}: ${lang}`);
});

//it's call back
// we can also do like this
console.log(`\n`);

function printMe(langs) {
  console.log(`${langs}`);
}

proLang.forEach(printMe);
console.log(`\n`);
//we can also give more parameters: for example
proLang.forEach((items, index, array) => {
  console.log(`${items}, ${index}, ${array}`);
});

//what if arrays of objects
const myCoding = [
  {
    languageName: "JavaScript",
    extension: ".js",
  },
  {
    languageName: "Python",
    extension: ".py",
  },
  {
    languageName: "Java",
    extension: ".java",
  },
];

myCoding.forEach((items) => {
  console.log(`${items.languageName}`);
});

//maps
//maps are not itterable
//we cannot use "for in" loop over maps
//map is an object
//map is a collection of key value pairs
//map remember the original insertion of order of keys while object don't
//maps are unique: i.e => there is no dupplication

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
console.log(map);

//let's loop through it

for (let [key, values] of map) {
  console.log(`${key} : ${values}`);
}
