// switch 
/*
switch(expression){
case value: -------------;
            break;
case value: -------------;
            break;
case value: -------------;
            break;
case value: -------------;
            break;
default : ---------------;            
}
*/

let weekday:any = "Friday";

switch(weekday){
    case 'Sunday' : console.log(`Weekday is ${weekday}`);
                    break;
    case 'Monday' : console.log(`Weekday is ${weekday}`);
                    break;
    case 'Tuesday' : console.log(`Weekday is ${weekday}`);
                    break;
    case 'Wednesday' : console.log(`Weekday is ${weekday}`);
                    break;
    case 'Thursday' : console.log(`Weekday is ${weekday}`);
                    break;
    case 'Friday' : console.log(`Weekday is ${weekday}`);
                    break;
    case 'Saturday' : console.log(`Weekday is ${weekday}`);
                    break;
    default :  console.log("No matched weekday");
    
}

let x:number = 10, y:number = 5;

switch(x-y)
{
    case 0 : console.log(`Result is ${x-y}`);
                    break;
    case 1 : console.log(`Result is ${x-y}`);
                    break;
    case 2 : console.log(`Result is ${x-y}`);
                    break;
    case 3 : console.log(`Result is ${x-y}`);
                    break;
    case 4 : console.log(`Result is ${x-y}`);
                    break;
    case 5 : console.log(`Result is ${x-y}`);
                    break;
}
