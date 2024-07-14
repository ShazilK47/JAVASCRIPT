console.log("2" > 1); //true
console.log("02" > 1); //true            => as js automatically converts string into number

//let's test some other comparison

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null <= 0); //true

console.log(undefined == 0); //false
console.log(undefined <= 0); //false
console.log(undefined > 0); //false

//Note: An equaltiy check "=="  and comparison <, >, <=, <= works differntly
// comparison converts null to a number treating it as 0
//that's why null >= 0 is true and null > 0 is false
// equality check "==" converts both null and 0 to a boolean false

// Strict check => ===      : it checks value and datatype also.
