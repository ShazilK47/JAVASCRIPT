class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  getter;
  //   email = "shazil@gmail.com";
  get email() {
    return `Email: ${this._email}`;
  }

  set email(email) {
    if (email.includes("@")) {
      this._email = email;
    } else {
      console.log("Invalid email");
    }
  }
}

const sk = new User("Shazil", "shazil@gmail.com");
console.log(sk.email);
