// *************************** Date and Time in JS *******************************

let myDate = new Date(); // => intilize date object
console.log(myDate); // => print date object
console.log(typeof myDate); // => date is an object

//some date methods.
console.log(myDate.getFullYear()); // => print year
console.log(myDate.getMonth()); // => print month
console.log(myDate.getDate()); // => print date
console.log(myDate.getDay()); // => print day
console.log(myDate.getHours()); // => print hour
console.log(myDate.getMinutes()); // => print minutes
console.log(myDate.getSeconds()); // => print seconds

//important one
console.log("\n Other Date Methods");
console.log(myDate.toString()); // => print date in string format
console.log(myDate.toDateString()); // => print date in string format
console.log(myDate.toLocaleDateString()); // => print date in string format
console.log(myDate.toLocaleTimeString()); // => print time in string format

// We can also get particular date by giving argumants in data object
console.log("\n Get particular date by giving argumants in data object");

let myCreatedDate = new Date(2023, 0, 18);
console.log(myCreatedDate.toLocaleString()); //1/18/2023, 12:00:00 AM
//note that: in js months start from (0) => 0 is january

myCreatedDate = new Date(2024, 5, 9, 10, 30);
console.log(myCreatedDate.toLocaleString()); // => 6/9/2024, 10:30:00 AM

// we can also have time stamp ..
console.log("\n Time Stamp");

let myTimeStamp = Date.now();
console.log(myTimeStamp); // => 1660114800000        : it's the total time stamp since the official Date.. time in JS

console.log(myCreatedDate.getTime());
//we can compare both => it wil help in managing time. counts : like in quiz applications or polls

//if we want this time in sec as this is in Mili seconds

console.log(myCreatedDate.getTime() / 1000); // => 1660114800
console.log(Math.floor(Date.now() / 1000));

//let's practice some other example
let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); //to get proper month
console.log(newDate.getFullYear());

console.log(
  newDate.toLocaleString(`Default`, {
    //it take object as an paramater. where we can customize it
    weekday: "long",
    day: "numeric",
    month: "long",
  })
);
