// can we change the value of Math.PI ?  No
//but why? let's see

//objects has some hidden properties , some we can access by `getOwnPropertyDescripter`. let's see
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

//OUTPUT
/* 
    {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false      
}

*/

//=> these are some properties as false that's why we can't change the value of PI

//now can we make our on object and define these properties ? yes , let's try

let User = {
  username: "shazil",
  email: "shazil.akn@gmail.com",
  password: "abc",
};

// let's define the hidden properties
let prop = Object.getOwnPropertyDescriptor(User, "username");
console.log(prop);

let prop1 = Object.defineProperty(User, "username", {
  writable: false,
  enumerable: false,
});

let prop3 = Object.getOwnPropertyDescriptor(User, "username");
console.log(prop3);
//OUTPUT
/* 
    {
  value: 'shazil',  
  writable: false,  
  enumerable: false,
  configurable: true
}
*/
//=> see! the value of writable and enumerable becomes false
//note: as emurable is false, so this object property (username) becomse in irretable , can't be loop through
