// Let -- has block scope

function letScope(){
    if(true){
        let msg = "Hello World!";
        console.log(msg);    
    }
    // msg has block scope
    // console.log(msg);  // does not execute
}

letScope();

// Declaration & Initialization
// let y;
// console.log(y);
// y = "World";
// console.log(y);



// Redeclaration

// let y = "Hello World";
// let y = "Hello..!"
// console.log(y);


// Reassignment
// let y = "Greetings"; 
// y = "GM"; 
// console.log(y);


// Hoisting

// console.log(a); // error
// let a = 10;
// console.log(a); 