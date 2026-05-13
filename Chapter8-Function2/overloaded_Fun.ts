// function overloading
// function overloading is a feature in TypeScript that allows you 
// to define multiple function signatures for a single function implementation.
// This can be useful when you want to provide different ways to call a function based on the types of the arguments passed to it.

// steps to create a function overload in TypeScript:
// 1. define signature
// 2. implement the function
// 3. calling the function

// Example1 -- with different types of parameters
function getInfo(id: number): string;
function getInfo(name: string): string;
function getInfo(param: number | string): string {
    if (typeof param === 'number') {
        return `ID: ${param}`;
    } else {
        return `Name: ${param}`;
    }
}

console.log(getInfo(123)); // Output: ID: 123
console.log(getInfo("Alice")); // Output: Name: Alice

// Example2 -- with different no of parameters
function calculateArea(radius: number): number;
function calculateArea(length: number, width: number): number;

function calculateArea(param1: number, param2?: number): number {
    if (param2 === undefined) {
        // Calculate area of a circle
        return Math.PI * param1 * param1;
    } else {
        // Calculate area of a rectangle
        return param1 * param2;
    }
}   

console.log(calculateArea(5)); // Output: Area of circle with radius 5
console.log(calculateArea(4, 6)); // Output: Area of rectangle with length 4 and width 6

// Example3


function addition(a: number, b: number): number;
function addition(a: number, b: number, c: number): number;
function addition(a: number, b: number, c: number, d: number): number;


function addition(param1: number, param2: number, param3?: number, param4?: number): number {
    if (param3 === undefined) {
        return param1 + param2;
    } else if (param4 === undefined) {
        return param1 + param2 + param3;
    } else {
        return param1 + param2 + param3 + param4;
    }
}

console.log(addition(2,3));
console.log(addition(2,3,4));
console.log(addition(2,3,4,5));

// Example4 -- with different return types
function processInput(input: string): string;
function processInput(input: number): number;   
function processInput(input: boolean): boolean;   

function processInput(param: string | number | boolean): string | number | boolean {
    if (typeof param === 'string') {
        return `My name is ${param}`; // Example of processing a string
    } else if(typeof param === 'number') {
        return `My age is ${param}`; // Example of processing a number
    }
    else{
        return `My status of Job is ${param}`; // Example of processing a boolean
    }
}

console.log(processInput("NCC")); // Output: My name is NCC
console.log(processInput(28)); // Output: My age is 28
console.log(processInput(true)); // Output: My status of Job is true
