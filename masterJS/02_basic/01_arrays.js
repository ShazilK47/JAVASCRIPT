// Array

//Array is an object
//Array is a collection of values
//Arrays is resizable in java
//Array is a reference type
//Array can contain mix datatypes like numbers, string , boolean , at a time.
//Array indexes elements from zero
//Array is a static data structure

//important one
//Array copy operations create shallow copy:
// Shallow copy: of an object is a copy whose properties share the same reference point (heap memory)
// Deep copy: of an object is a copy whose properties do not share the same reference point.(stack memory)
//Note:
// ()    => parenthesis
// {}    => curly braces
// []   => brackets or square brackets : for arrays we use this

const mArray = [1, 2, 3, 4, 5, 6]; //=> data inside array is called elements
console.log(mArray); //=> [1, 2, 3, 4,5,6]
console.log(mArray[3]); //we can access array property like this

//Array methods

//push() => add element at the end of the array
//pop() => remove element from the end of the array
//unshift() => add element at the beginning of the array
//shift() => remove element from the beginning of the array
//splice() => remove element from the middle of the array
//slice() => copy element from the middle of the array
//concat() => add element from one array to another array
//join() => convert array to string
//indexOf() => find the index of the element in the array
//includes() => find the element in the array
//reverse() => reverse the array
//sort() => sort the array
//forEach() => iterate the array
//map() => iterate the array
//filter() => filter the array
//reduce() => reduce the array
//find() => find the element in the array
//findIndex() => find the index of the element in the array
//some() => check the element in the array
//every() => check the element in the array
//isArray() => check the element in the array

//now let's check some examples of methods in array

let myArray = [0, 1, 2, 3, 4, 5];
const myFriends = ["Bilal", "Subhan", "Imran", "Hammad"];

const myArray2 = new Array(1, 2, 3, 4, 5); //=> we can also initialize array like this

//1. Push method
myArray.push(6); //added element at the end of an array
console.log(myArray);

//2. Pop method
myArray.pop(); //remove element from the end of array
console.log(myArray); //=> [0,1,2,3,4,5]

//3. unshift()

myArray.unshift(6); //insert element at the start of array
console.log(myArray); //=> [5,0,1,2,3,4,5]

//4. shift()
myArray.shift(); //remove element from the start of array
console.log(myArray); //=> [0,1,2,3,4,5]

//5. includes() => checks hte avalibality of element in the array
console.log(myFriends.includes("Bilal")); //=> true
console.log(myFriends.includes("Bilal", 1)); //=> false

//=> includes method takes two parameters, first is the element and second is the index from where we
//want to search the element
//=> if we pass the index then it will search the element from that index otherwise it will search
//from the start of the array

//6. indexof
console.log(myFriends.indexOf("Bilal")); //=> 0
console.log(myFriends.indexOf("Bilal", 1)); //=> -1
console.log(myArray.indexOf(9)); //-1

//Note: if the element do not include in the array then it will return -1 otherwise it will return the index of the element

//7. join(): changes the arrray into string
const newArr = myArray.join();
console.log(newArr); //=> 0,1,2,3,4,5

//imp:    slice and splice
//slice() => it will return the new array
//splice() => it will change the original array

// let's see with an example

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(`Original Array: ${numbers}`);

console.log(`Slice(2,5): ${numbers.slice(2, 5)}`); //=> [2,3,4]   : note: the last index value does'nt included
console.log(`Slice(5): ${numbers.slice(5)}`);
console.log(`Original Array After slice: ${numbers}`);

console.log(`Splice(2,6): ${numbers.splice(2, 6)}`); //=> [2,3,4,5] : note: it includes the last element also and changes the original array
console.log(`Original Array After splice: ${numbers}`);
console.log(`Splice(3): ${numbers.splice(3)}`);

//let's do practice with strings

const myTeachers = [
  " 1. Sir Zubair",
  " 2. Sir Ameen Khowaja",
  " 3. Sir Zia Khan",
  " 4. Sir Shoaib",
];

console.log(myTeachers);
console.log(`Join(): ${myTeachers.join()}`);
myTeachers.push(" 5. Miss Sana");
myTeachers.unshift(" 0. Miss Rana");
console.log(myTeachers);
console.log(`Slice(2,4): ${myTeachers.slice(2, 4)}`);
console.log(`Slice(2,2): ${myTeachers.slice(2, 2)}`);
console.log(`Slice(2): ${myTeachers.slice(2)}`);
console.log(`Splice(0,2): ${myTeachers.splice(0, 2)}`);

//note: splice takes two paramenters: 1. index value of element, where to splice and 2. number of element to splice
