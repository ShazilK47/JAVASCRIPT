const myTeachers = [
  " 1. Sir Zubair",
  " 2. Sir Ameen Khowaja",
  " 3. Sir Zia Khan",
  " 4. Sir Shoaib",
];

console.log(myTeachers);
console.log(`Join(): ${myTeachers.join()}`);
myTeachers.push(" 5. Miss Sana");
myTeachers.unshift(" 0. Miss Rana");
console.log(myTeachers);
console.log(`Slice(2,4): ${myTeachers.slice(2, 4)}`);
console.log(`Slice(2,2): ${myTeachers.slice(2, 2)}`);
console.log(`Slice(2): ${myTeachers.slice(2)}`);
console.log(`Splice(0,2): ${myTeachers.splice(0, 2)}`);