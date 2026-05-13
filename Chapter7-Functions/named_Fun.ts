// Named functions -- declared with a name

/*
function declaretion 

function function_name(parameter): return_type {
// function body 

}

function call
function_name();

*/

// Named function with no return type and no parameters
// example 1
function greet() : void{
    console.log("Hello.., Welcome to TypeScript");
}

greet();

// example 2
function displayMessage() : void{
    console.log("This is a named function with no parameters and no return type.");
}

displayMessage();

// named function with parameters and return type
// example 3
function add(a: number, b: number) : number{
    return a + b;
}

const sum = add(5, 10);
console.log("The sum is: ", sum);


// named function with rest parameters
// example 4
function additionNumbers(...nums:number[]): number{
    let i: number;
    let sum:number= 0;
    for(i=0; i<nums.length; i++){
        // sum += nums[i];
        sum = sum + nums[i];
    }
    return sum;
}   

// console.log(additionNumbers(1,2,3,4,5,6,7,8,9,10));

const total = additionNumbers(1,2,3,4,5,6,7,8,9,10);
console.log("The total is: ", total);



// named function with rest parameters with different datatypes
// example 5

function findElement(...elements: (number | string)[]): number{
    return elements.length;
}

// const elementCount = findElement(1, "Hello", 3, "World", 5); // returns 5
// console.log("The number of elements is: ", elementCount);

console.log(findElement(1, "Hello", 3, "World", 5));
console.log(findElement(1, 2, 3, 4, 5,6,7,8,9,10));
console.log(findElement("Hello","World"));


// named function with optional parameters
// example 6

function dispalyDetails(id:number, name:string, mailId:string): void{
    console.log("ID: ", id);
    console.log("Name: ", name);
    console.log("Mail ID: ", mailId);

}

dispalyDetails(1, "John Doe", "john.doe@example.com");

// example 7 

function dispalyInfo(id:number, name:string, mailId?:string): void{
    console.log("ID: ", id);
    console.log("Name: ", name);
    if(mailId){
        console.log("Mail ID: ", mailId);
    }
    // if(mailId !== undefined){
    //     console.log("Mail ID: ", mailId);
    // }
}

// dispalyInfo(100 , "Johnny Doel", "johnny.doel@example.com");
dispalyInfo(100 , "Johnny Doel");

// named function with default parameters
// example 8
function displayUserInfo(id:number, name:string, mailId:string = "Not Provided"): void{
    console.log("ID: ", id);
    console.log("Name: ", name);
    console.log("Mail ID: ", mailId);
}

displayUserInfo(1, "Alice Smith", "AliceSmith@gmail.com");
displayUserInfo(2, "Bob Johnson");