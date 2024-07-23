//if-else
//Syntax
if (true) {
}

//conditions: < , > , == , != , ===(strict operator), !==  => check the values as well as it's type
//eg. of strict operator
if (2 == "2") {
  console.log(`2 = "2": true`);
}

if (2 === "2") {
  console.log(`2 === "2": true`);
} else {
  console.log(`2 === "2": False`);
}

//short form
let balance = 1000;
if (balance < 1000) console.log(`Balance: ${balance}`);

//let take a real life example

const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = true;

if (userLoggedIn && debitCard) {
  //check more then one condition(true) we use And (&&) operator
  console.log("You can make a payment");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  //check more then one condition we use Or (||) operator
  console.log("You can make a payment");
}
