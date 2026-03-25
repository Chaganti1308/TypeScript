var myAge = 30;

/**
 * Var vs Let vs Const 
 * 
 * 1. Scope
 * 2. Declaration/Assignment
 * 3. Reassignment
 * 4. Redeclaration
 * 5. Hoisting
 */

// scope -- variable accessible area
// var -- function scope
// let , const -- block scope
function testFun(){
    // function scope
    if(true){
        // variables
    }
}

if(true){
    // Block scope
}
