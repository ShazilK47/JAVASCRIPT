//Key words to declare variable in JS
//1.const 
//2.let 
//3.var

const accountId = 833434     //unchangable
let accountEmail = "shazil.akn@gmail.com"
var accountPassword = "5555"
accountCity = "karachi"   //In Js Variables also be declare like that but don't do it as it is a bad practice
let accountState;       //undefined

// accountId = 2; //not allowed

accountEmail = "sk@gmail.com"
accountPassword = "4332"
accountCity = "Islamabad"  //it's possible in js to declare variable like that but don't do it

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);

//     {
//             --> this is scope
//   }

/*
Prefer not to use var
because of issue ne block scope and functional scope
*/