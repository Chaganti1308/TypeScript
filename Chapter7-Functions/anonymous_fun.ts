// Anonymous fun -- does not have a name, and is often used as an argument to a higher-order function or as an immediately invoked function expression (IIFE).
/**
 * function(){
 * // fun body
 * }
 * 
 * function(params){
 * // fun body
 * }
 */

// Example 1: Using an anonymous function
let msg = function() : string {
    return "Hello, World!";
}

console.log(msg()); // Output: Hello, World!

// Example 2 : Anonymous function with parameters
let multiply = function(a: number, b: number) : number {
    return a * b;
}

console.log(multiply(5, 3)); // Output: 15 

