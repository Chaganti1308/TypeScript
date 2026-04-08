// Check if a number is positive and even.

let no:number = -23;

if(no > 0){
    console.log(`No is Positive number`);
    
    if(no%2 == 0){
        console.log(`${no} is even number`);
        
    }
    else{
        console.log(`${no} is odd number`);
        
    }
}
else{
    console.log(`${no} is negative number`);
    
}