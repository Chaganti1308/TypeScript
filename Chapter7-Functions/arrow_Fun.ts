// Arrow functions

/**
 * Arrow functions are a concise syntax for writing function expressions in TypeScript. 
 */

/**
 * let var = (parameters) => {
 *   // function body
 * }    
 * 
 * var();
 * 
 */

// Example 1: Basic arrow function
// no param no return type

console.log("*****no param no return type*****");

let msg = ():void => {
    console.log("Hello, Arrow Function!");
}

msg();

// Example 2: Arrow function with parameters and return type
console.log("*****Arrow function with parameters and return type*****");

let add = (a:number, b:number):number => {
    return a + b;
}

console.log("Addition: " + add(5, 3)); // Output: 8

// Example 3: Arrow function with implicit return
let multiply = (x:number, y:number):number => x * y;

console.log("Multiplication: " + multiply(4, 6)); // Output: 24

// Example 4: Arrow function with optional parameters
console.log("*****Arrow function with optional parameters*****");
// let dispalyInfo = (id:number, name:string, Profession?:string):void => {
//     console.log("Id :", id);
//     console.log("Name :", name);
//     console.log("Profession :", Profession);
// }

let dispalyInfo = (id:number, name:string, Profession?:string):void => {
    console.log("Id :", id);
    console.log("Name :", name);
    if (Profession) {
        console.log("Profession :", Profession);
    }
}

dispalyInfo(1, "John Doe","Job"); // Profession is optional
dispalyInfo(2, "Jane Doe"); // Profession is optional

// Example 5: Arrow function with default parameters
console.log("*****Arrow function with default parameters*****");

let greet = (name:string = "Guest"):string => {
    return `Hello, ${name}!`;
}   

console.log(greet());

console.log(greet("Neeharika"));

// Example 6: Arrow function with rest parameters
console.log("*****Arrow function with rest parameters*****");

// let countElements = (...elements:any[]):number => {
//     return elements.length;
// }

let countElements = (...elements:(number | string)[]):number => {
    return elements.length;
}

console.log("Length of array : ", countElements(1,2,3,4,5,6));
console.log("Length of array : ", countElements(1,"NC",3,"CN",5,"CH",6,"DI"));
console.log("Length of array : ", countElements("oop","ts","js","python","java","c++","c#","ruby","go","swift"));

