function scopeDiff(){
    if(true){
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;

        // no error here acessing the elements
        console.log(num1);
        console.log(num2);
        console.log(num3);
        
    }
    // while accessing num1 -- no error
    // for num2, num3 -- error because of block scope
    // console.log(num1);
    // console.log(num2);
    // console.log(num3);
}