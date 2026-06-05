// method overloading & constructor overloading

class Calculator{
    // constructor(); // default constructor
    // constructor(a?:number, b?:number); // parameterised constructor

    constructor(a?:number, b?:number){
        if(a !== undefined && b !== undefined){
            console.log(`Sum: ${a + b}`);
        }
        if(a !== undefined && b !== undefined){
            console.log(`Mul: ${a * b}`);
        }
        if(a !== undefined && b !== undefined){
            console.log(`Div: ${a / b}`);
        }
        else{
            console.log("Default constructor called");
        } 
    }
}

console.log("=====Parameterised Constructor====");

let calc = new Calculator(10,5);

console.log("=====Default Constructor====");

let defaultCalc = new Calculator();

