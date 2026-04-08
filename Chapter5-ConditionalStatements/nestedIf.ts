//nested if

/*
if(cond1){

}else if(cond2){

}else if(cond3){

}
.
.
.
.
else {
    statements
}
*/

// grade base on marks
/**
 * >= 90 -- grade A
 * >= 75 -- grade B
 * >= 60 -- grade C
 * >= 45 -- grase D
 * else -- Fail
 */

let marks:number = 90;

if(marks >= 90){
    console.log("Grade A");
    
}else if(marks >= 75 && marks < 90){
    console.log("Grade B");
    
}else if(marks >= 60 && marks < 75){
    console.log("Grade C");
    
}else if(marks >= 45 && marks < 60){
    console.log("Grade D");
    
}else {
    console.log("Fail");
    
}

// Browser selection
let browser:string = "Brave";

if(browser == "Chrome"){
    console.log("Browser is ",browser);
    
}else if(browser == "Firefox"){
    console.log("Browser is ",browser);
    
}else if(browser == "Safari"){
    console.log("Browser is ",browser);
    
}else if(browser == "Edge"){
    console.log("Browser is ",browser);
    
}else{
    console.log("Browser was not in the list");
    
}
