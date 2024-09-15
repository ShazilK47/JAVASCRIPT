// ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     console.log(`${this.password}abc`);
//   }

//   changeUsername() {
//     console.log(`${this.username.toUpperCase()}`);
//   }
// }

// let shazil = new User("shazil", "shazil@gmail.com", "1234");

// shazil.encryptPassword();
// shazil.changeUsername();

//behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  console.log(`${this.password}xyz`);
};

User.prototype.changeUsername = function () {
  console.log(`${this.username.toUpperCase()}`);
};

let sk = new User("shazil", "shazil@gmail.com", "456");
console.log(sk.username);
sk.changeUsername();
sk.encryptPassword();
