//Arrays concatination methods

const myCloseFriends = ["Talha", "Imran", "Hammad", "Bilal"];
const myOtherFriends = ["Subhan", "Taha", "Haseeb", "Zubair"];

//ok let's try to merge them in one array

//we can try some techniques. first let's see if the push method works
//myCloseFriends.push(myOtherFriends); //this will not work because it will push the array
//myOtherFriends as a single element in the array
//so we need to use the concat method
//concat method will merge the arrays
//myCloseFriends.concat(myOtherFriends); //this will work but it will not change the original
//array. so we need to store it in a new variable

const myAllFriends = myCloseFriends.concat(myOtherFriends);
console.log(myAllFriends); //this will print the new array

//but there is one another way to concinate arrays.
//spread operator

const myFriends = [...myCloseFriends, ...myOtherFriends];
console.log(myFriends); //this will print the new array with all the elements of both arrays combined
