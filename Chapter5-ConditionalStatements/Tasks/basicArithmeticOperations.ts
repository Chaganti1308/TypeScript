// Perform basic arithmetic operations based on user input.

let operator:string = '+';

let number1 = 12;
let number2 = 6;

switch (operator){
    case '+' : console.log(`Result : ${number1+number2}`);
                break;
    case '-' : console.log(`Result : ${number1-number2}`);
                break;
    case '*' : console.log(`Result : ${number1*number2}`);
                break;
    case '/' : console.log(`Result : ${number1/number2}`);
                break;
    case '%' : console.log(`Result : ${number1%number2}`);
                break;
    default : console.log("Arithmatic operation was not found");
    
    
}