// Always return either TRUE/FALSE
// operators -- <,>,<=,>=,==,!=,===,!==
let a = 10;
let b = 12;

console.log("***********Relational Operators************");

console.log(" a > b :",a > b);
console.log(" a < b :",a < b);
console.log(" a <= b :",a <= b);
console.log(" a >= b :",a >= b);
console.log(" a == b :",a == b);
console.log(" a != b :",a != b);

/**
 * == -- used to check with the values not the datatype
 * === -- checks along with value & it's datatype
 */

let x:any = 20;
let y:any = "20";

console.log("x == y : ",x == y);
console.log("x === y : ",x === y);
