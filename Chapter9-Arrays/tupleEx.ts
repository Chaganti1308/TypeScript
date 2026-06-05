// tuples
// tuple with 2 values

let person:[string, number] = ["John", 30];

console.log(person[0]);
console.log(person[1]);

let employee:[number,string,boolean] = [4300, "NC", true];
// for loop to access tuple elements
console.log("Using traditional for loop");

for(let i=0; i<employee.length; i++){
    console.log(employee[i]);
}

// optional tuple
let person2:[string, number?] = ["Jane"];

// tuple with rest elements
let employee2:[number, ...string[]] = [4301, "NC", "Manager", "Full-time"];
console.log("Using for in loop..");

for(let i in employee2){
    console.log(employee2[i]);
}
// using for of loop
let employee3:[number, ...string[]] = [4302, "NC", "Developer", "Part-time"];
console.log("Using for of loop.."); 
for(let item of employee3){
    console.log(item);
}

// tuple  array [Array of tuples]
let students:[string, number][] = [
    ["Alice", 85],
    ["Bob", 90],
    ["Charlie", 78]
];
// array length
console.log(students.length);
// accessing elemenets in tuple array
console.log(students[1]);


// Extracting values from tuple array using for of loop
for(let student of students){
    console.log(`Name: ${student[0]}, Score: ${student[1]}`);
}
