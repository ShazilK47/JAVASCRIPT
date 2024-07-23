//for loop:
//syntax
//  for(initialization; condition;   increment/decrement){
//      code to be executed
//  }
//for loop is used to execute a block of code repeatedly until a specified condition is true.

//initialization:  let i = 0;
// condition:      i < 10;
// increment: i++
// decrement: i--

//Nested  LOOP: loop inside a loop

//syntax
//  for(initialization; condition;   increment/decrement){
//      for(initialization; condition;   increment/decrement){
//          code to be executed
//      }
//  }

//printing numebers

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//printing table from 1 to 10(using nested loops)

for (let i = 1; i <= 10; i++) {
  console.log(`\nTABLE Of: ${i}`);
  for (let j = 1; j <= 12; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//break and continue

//break;
for (i = 0; i < 10; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    break;
  }
  console.log(`Value of i : ${i}`);
}
//NOte: when i == 5; the loops stop

console.log(`\n`);
//Continue;

for (i = 0; i < 10; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    continue; //when i ==5; the loop execute the code inside condition and continue further
  }
  console.log(`Value of i : ${i}`);
}
