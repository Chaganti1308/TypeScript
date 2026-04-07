/**
 * Primitive Data Types -- Number, String, boolean, null, undefined, any, void
 * Non Primitive Data Types -- Array, Class, Function, Interface, Tuple
 * 
 
 */

// Number
let age :number = 30;
let price = 300.50;
let big = 1234567890;

console.log("Age : ",age);
console.log("Price : ",price);
console.log("Big Number",big);

console.log(typeof age);
console.log(typeof price);
console.log(typeof big);
console.log("------------------------------");



// Strings
let firstName :string = "Neeharika";
let lastName :string = 'Chaganti';
console.log(`My name is ${firstName} ${lastName}`);

let greet :string = `Hello,${firstName},${lastName}`;
console.log(greet);
console.log("------------------------------");

//Boolean
let isStudent :boolean = true;
let hasJob :boolean = false;
console.log("Is student :",isStudent);
console.log("Has Job :",hasJob);

console.log("------------------------------");

// Null & undefined

let emptyValue :null = null;
let notAssigned;

console.log("Empty Value : ", emptyValue);
console.log(notAssigned);

// let priceOfProduct :number;
let priceOfProduct :number = 100;
console.log(priceOfProduct);


// Any -- No type safety with this.

let val :any = "NC";
console.log(typeof val);
val = 100;
console.log(typeof val);
val = true;
console.log(typeof val);

// Union -- combines multiple types
let id :number | string | boolean;
id ="123123";
console.log(id);
 

// void -- mainly used in Functions
//-- that they don't return anything

function show() : void{
    console.log("Show Fun");
    
}
show();

function add(a :number,b:number){
 return a+b;
}

console.log(add(10,20));
