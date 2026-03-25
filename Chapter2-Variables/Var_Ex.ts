// var  -- functional scope

function varScope(){
    if(true){
        var message = "Hello PW!";
        // console.log(message);
        
    }
    // functional scope
    console.log(message);
    
}

varScope();

// Declaration & Initialization
/*
var x; // declaration
console.log(x); // undefined
x = "Hello"; // initialization
console.log(x); // Hello
*/

// Redeclaration
// var x = "Greetings"; 
// var x = "GM"; 
// console.log(x);

// Reassignment
// var x = "Greetings"; 
// x = "GM"; 
// console.log(x);


// Hoisting
// console.log(a); // undefined
// var a = 10;
// console.log(a); 
