// Arrays Example

// let names:string[] = []; // declarartion

// initialisation of arrays
/**
names = ["Alice"];
names = ["Bob"];
names = ["Charlie"]; // adding an element to the end of the array

console.log(names);

*/

// Example1: Adding values to an array index by index and at the time of declaration
let names:string[] = [];

names[0] = "Alice";
names[1] = "Bob";
names[2] = "Charlie"; 
console.log("***Added values index by index***");
console.log(names);


// Example2: Adding values to an array at the time of declaration
let fruits : string[] = ["Apple", "Banana", "Cherry"];
console.log("***Added values at the time of declaration***");
console.log(fruits);    
console.log(typeof fruits);

// Ex 3
let empNames:Array<string> = ["John", "Jane", "Doe"];
console.log("***Using Array generic type***");
console.log(empNames);

// Ex 4: Array of numbers
let numbers:Array<number> = [1, 2, 3, 4, 5];
console.log("***Array of numbers***");
console.log(numbers);

// Ex:5 combination of string or number
let misxedArray:Array<string | number> = ["Alice",1, "Bob", 2, "Charlie", 3];
console.log("***Combination of string and number***");
console.log(misxedArray);

// Ex:6 Array of differenet data types
let mixedDataTypes:Array<any> = ["Alice", 30, true, "Bob", 25, false];
console.log("***Array of different data types***");
console.log(mixedDataTypes);

