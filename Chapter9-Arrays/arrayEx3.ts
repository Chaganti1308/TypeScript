// passing array as an arg to a  function



function searchElement(ele:number, arr:number[]):boolean{
    for(let i =0; i<arr.length; i++){
        if(arr[i] === ele){
            return true;  // element found
        }
        
    }
    return false; 
}

let numArray:number[] = [10,20,30,40,50];
console.log(searchElement(30, numArray));
console.log(searchElement(100, numArray));


// funcyion returning an array
// pass strings, convert into lowercase, return them as array

function caseConversionArray(arr:string[]):string[]{
    let res:string[] = [];
    for(let i=0;i<arr.length;i++){
        console.log("Elements : ",arr[i]);
        res[i] = arr[i].toUpperCase();
    }
    return res;
}

let strArray = ['apple','banana','cherry','dragon','guava','chocolate','IceCream'];
console.log(caseConversionArray(strArray));
