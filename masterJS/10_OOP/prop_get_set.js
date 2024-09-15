function User(name, email) {
  this._name = name; //must be with _ => this
  this._email = email;

  Object.defineProperty(this, "name", {
    get: function () {
      return this._name;
    },
    set: function (value) {
      this._name = value;
    },
  });
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });
}

const sk = new User("shazil", "shazil@gmail.com");
console.log(sk.email);
