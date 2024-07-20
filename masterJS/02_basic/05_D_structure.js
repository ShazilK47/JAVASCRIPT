// D-structuring an object or arrays means "Copying the proporty from and object or array to an variable."
// for example.

Math.PI;
console.log(Math.PI);
//as maths is an object
let { PI } = Math;
console.log(PI);
let pi;
pi = PI;
console.log(pi);

//let's create an object and de-structure it

const course = {
  cousreName: "Generative Ai",
  coursePrice: 10000,
  courseInstructor: "Sir Zia Khan",
};

// console.log(course.courseName);    => one way is to access values like this
// console.log(course["courseName"]); => another way is to access values like this

//but we can also save object proprty in a seperate vairable and access it easily using d_structure

const { courseInstructor } = course;
console.log(courseInstructor);

//we can also give another name to this varaible like this

const { coursePrice: price } = course;
console.log(price);

//that's good

//JSON: JavaScript Object Notation
//JSON is a way to store data in a structured format. It is a text-based format that
//is easy to read and write and can be easily converted to other formats, such as XML or
//CSV. JSON is often used to transmit data between a server and a web application.

//syntax
//JSON is a text-based format that uses key-value pairs to store data. Each key-value pair
//is separated by a comma, and the entire object is enclosed in curly braces. For example,
//the following is a JSON object that represents a person's name, age, and address:
// {
//   "name": "Shazil Khan",
//   "age": 21,
//   "address": {
//     "street": "123 Main St",
//     "city": "Anytown",
//     "state": "CA",
//     "zip": "12345"
//   }
// }
//In this example, the "name" key has the value "Shazil khan"

//imp links
//https://randomuser.me/
//https://jsonformatter.org/
