const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = nums.filter((item) => item % 2 == 0);
// let evenNumbers = nums.filter((item) => {
//   return item % 2 == 0;
// });
console.log(`${evenNumbers}`);

//we can also this by forEach
let newNum = [];
nums.forEach((item) => {
  if (item % 2 == 0) {
    newNum.push(item);
  }
});

console.log(`${newNum}`);

//let's do some real life example

const books = [
  {
    title: "Book One",
    genre: "History",
    publish: 1991,
    edition: 2003,
  },
  {
    title: "Book Two",
    genre: "Non-fiction",
    publish: 2001,
    edition: 2008,
  },
  {
    title: "Book Three",
    genre: "Science",
    publish: 2000,
    edition: 2004,
  },
  {
    title: "Book Four",
    genre: "Non-fiction ",
    publish: 2005,
    edition: 2020,
  },
  {
    title: "Book Five",
    genre: "Fiction",
    publish: 2019,
    edition: 2023,
  },
  {
    title: "Book Six",
    genre: "History",
    publish: 2015,
    edition: 2019,
  },
  {
    title: "Book Seven",
    genre: "Science",
    publish: 2020,
    edition: 2024,
  },
  {
    title: "Book Eight",
    genre: "History",
    publish: 2010,
    edition: 2015,
  },
];

//let's do filers
let userBooks = books.filter((bk) => bk.genre === "History");
console.log(userBooks);
