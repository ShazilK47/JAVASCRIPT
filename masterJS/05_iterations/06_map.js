//map();
//automatically returns values

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10);
// console.log(newNums);
// console.log(myNumbers);

//chaining
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num2) => num2 + 1)
  .filter((num3) => num3 > 50);

console.log(newNums);
