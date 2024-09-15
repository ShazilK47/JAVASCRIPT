//Promise in JS

const promiseOne = new Promise((resolve, reject) => {
  //->contains a function
  // Do an async task
  // DB Calls, cryptography, network calls

  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

//resolve ==> .then
//reject ==> .catch

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 consumed");
});

//
let promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "shazil", email: "shazil@gmail.com" }); //mostly contains an object
  }, 1000);
});

//=>note: that the then function contain a parameter (which containes the value of resolve i.e object)
promiseThree.then(function (user) {
  console.log(user);
});

//Promise four ()

let promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Shazil Khan", password: "12345" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

//chaining, imp for database conneciton
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //parameter containes the return value of before promise;
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //it might be a default -> ye to hota hi hota hai. tells the promise is either resolve or rejected
    console.log("The promise is either resolve or rejected");
  });

// _----------------------------------------------------------------------
//promise five
let promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "sk", email: "sk@gmail.com" });
    } else {
      reject("Error: Js went wrong");
    }
  }, 1000);
});

//async await function
//note: aysnc await can't directly handle errors
async function consumePromiseFive() {
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//note that: both promiseFour and promiseFive are almost same. so we can use any of them.

//to fetch data from an api

async function getAllUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    //as it might be in string format so we have to convert it into json . so
    let data = await response.json(); // we use await here coz it may take time convert so we asked them not to go further (or await) until the data is converted
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

//if we have to do that same thing using .then / .catch method

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("data is being fetched");
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
