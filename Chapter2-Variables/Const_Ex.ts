// const -- block scope

function constScope(){
    if(true){
        const myName = "NC";
        console.log("My name is", myName); 
    }
    // console.log("My name is", myName);

}

constScope();

// Declaration & Initialization
// const z; // throws error
// console.log(z);

// // Redeclaration
// const z = "Hello";
// const z = "World";


// Reassignment
// const x = "Greetings"; 
// x = "GM"; 
// console.log(x);