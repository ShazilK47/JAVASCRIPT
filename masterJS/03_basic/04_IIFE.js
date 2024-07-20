//immediately Invoked Function Expressions (IIFE)

(function dbConnection() {
  //Named IIFE
  console.log(`DB Connected`);
})(); //=> IIFE

//can also be done by arrow function

(() => {
  //simple IIFE
  console.log(`DB Connected Two`);
})();

//we can also pass parameters

((name) => {
  console.log(`Welcome, ${name}`);
})("Shazil");

//******************************Error situations ****************************************/

// (function er1() {
//     console.log("test");
// })()            //=> here ';' is missing so it cause an error

//     (() => {
//         console.log(`test2`);
//     })();
