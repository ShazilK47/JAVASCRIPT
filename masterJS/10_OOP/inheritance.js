class User {
  constructor(name, email, password) {
    this.username = name;
  }

  logMe() {
    console.log(`Username is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(name, email, password) {
    super(name);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course has been added by ${this.username}`);
  }

  static myID() {
    return "c23";
  }
}

const teacher = new Teacher("Sir Zia Khan", "ziakhan@gmail.com", "1235");

teacher.addCourse();

//to check is it instance of ?
console.log(Teacher instanceof User);

//static keyword : => can't be changed or view;
// teacher.myID();  //-> can't be accessed
