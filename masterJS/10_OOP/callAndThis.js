function setUserName(username) {
  this.username = username;
}

function createUser(name, email, password) {
  setUserName.call(this, name); //=> call: to hold reference  and (this, ): as an exceptional parameter to specificy the current functions context

  this.email = email;
  this.password = password;
}

// let user = createUser("shazil", "shazil@gmail.com", "1234"); => undefined
let user = new createUser("shazil", "shazil@gmail.com", "1234");
console.log(user);
