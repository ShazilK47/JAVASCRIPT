//reduce()
//syntax:

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
//sum up the values in arrays
console.log(sumWithInitial); //10

//ok let's try another example
//note: reduce() takes two parameters: 1. call back(function) , 2. starting value(accumalator)
const marks = [56, 90, 80, 76, 98, 89];
const totalMarks = marks.reduce((previous, current) => previous + current, 0);
console.log(totalMarks);

let shoppingCart = [
  {
    itemName: "JS Course",
    itemPrice: 19999,
  },
  {
    itemName: "TS Course",
    itemPrice: 9999,
  },
  {
    itemName: "AI Course",
    itemPrice: 49999,
  },
  {
    itemName: "Python Course",
    itemPrice: 35000,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.itemPrice, 0);
console.log(totalPrice);
