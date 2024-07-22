//some values are considered as true and some as false

//falsy values
//0
//-0
//Bigint => 0n
//""
//null
//undefined
//NaN
//false

//truthy values
//anything else
// "0"
// "false"
// " "
// []
// {}
// -1
// functio() {}

//if we want to check if a value is truthy or falsy we can use the
//Boolean() function

const userEmail = "shazil@google.ai";
if (userEmail) {
  //it by default consider as truthy value
  console.log("Welcome shazil");
} else {
  console.log("Please provide your email address");
}
