// Call back function example

/**
 * A callback function is a function that is passed as 
 * an argument to another function and is executed after some operation has been completed.
 */

// Example1 of a callback function
function addition(a:number, b:number, showResultClbk:(result:number) => void) {
    const result = a + b;
    showResultClbk(result);
}
function showResult(result: number) : void {
    console.log("The result is: " + result);
}

addition(150, 100, showResult);

// Example2 of a callback function
// callback function to display a message
function greet(name:string, showMsg : (message:string) => void ) {
    const message = `Hello, ${name}! Welcome to TypeScript callbacks.`;
    showMsg(message);
}

function displayMessage(message:string) : void {
    console.log(message);
}  

greet("John", displayMessage);
displayMessage("Hello, this is a callback function example!");

// Example3 of a callback function
// main function to perform multiplication and call the callback function with the result
// function multiply(a:number, b:number, showResultClbk:(result:number) => void) {
//     const result = a * b;
//     showResultClbk(result);
// }

// // callback function to display the result
// function displayResult(result:number) : void {
//     console.log("The result is: " + result);
// }

// multiply(10, 20, displayResult);

// can specify multiple callback functions
function multiply(a:number, b:number, clbk:(result:number) => void) {
    const result = a * b;
    clbk(result);
}

// callback function to display the result
function displayResult(result:number) : void {
    console.log("The result is: " + result);
}

multiply(10, 20, displayResult);