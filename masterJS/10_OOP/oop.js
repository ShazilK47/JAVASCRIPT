const user = {
  username: "shazil",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got User details from database");
    console.log(`Username: ${this.username}`);
  },
};

console.log(user.username);
console.log(user.getUserDetails());

//to be femiliar with new keyword

function userDetails(username, id, password) {
  this.username = username;
  this.id = id;
  this.password = password;

  function greetings() {
    console.log(`Welcome ${username}`);
  }

  return this;
}

let userOne = new userDetails("shazil", 3, 12345); // this will target the reference , don't make new copy
let userTwo = new userDetails("Abdullah", 4, 6666); //this will create a new copy of the function

console.log(userOne);
console.log(userTwo);
