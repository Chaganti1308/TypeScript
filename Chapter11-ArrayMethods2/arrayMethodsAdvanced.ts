// forEach(), map(), filter(), reduce(), some(), every()

// 1. forEach() - Executes a provided function once for each array element.
const numbers:number[] = [1, 2, 3, 4, 5];
numbers.forEach((num, i) => {
    console.log(`Index ${i}: ${num}`);
});


// get the index of all fruits name with the indexes
const fruits:string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry',  'fig', 'grape'];
console.log("Printing all the fruits names and their indexes using for loop :");
for(let fruit in fruits){
    console.log(`Ind ${fruit}:  ${fruits[fruit]}`);
}

console.log("Printing all the fruits names and their indexes using forEach :");

fruits.forEach((fruit, index) => {
    console.log(` ${index} --> ${fruit}`);
});

// convert all the fruits names to uppercase using forEach
console.log("Converting all the fruits names to uppercase using forEach :");    
fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase());
});


// 2. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log("Original array:", numbers);
const squaredNumbers = numbers.map(num => num * num);   
const cubedNumbers = numbers.map(num => num * num * num);   // cube of the numbers
console.log("Squared numbers:", squaredNumbers);
console.log("Cubed numbers:", cubedNumbers);

// convert all the fruits names to uppercase using map
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Original fruits array : ", fruits);
console.log("Fruits in uppercase:", upperCaseFruits);

// with out array function
const multipliedNumbers:number[] = numbers.map(function(num){
    return num*5;
});
console.log("Multiplied numbers by 5 : ", multipliedNumbers);


// 3. filter() - Creates a new array with all elements
// that pass the test implemented by the provided function.

const numArray:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numArray.filter(num => num % 2 === 0);
const oddNumbers = numArray.filter(num => num % 2 !== 0);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);

const greaterthan5 = numArray.filter(num => num > 5);
console.log("Numbers greater than 5 : ", greaterthan5);

// 4. reduce() - Executes a reducer function 
// on each element of the array,
// resulting in a single output value.

// syntax : array.reduce((accumulator, currentValue) => { ... }, initialValue);

// for loop
let total = 0;
for(let i=0; i<numArray.length; i++){
    total += numArray[i];
}
console.log("Total using for loop : ", total);

// using reduce
// const sum = numArray.reduce((total, num) => {
//     return total + num;
// });
const sum = numArray.reduce((total, num) => total + num, 100);
console.log("Sum using reduce : ", sum);

// 5. some() - Tests whether at least one element in the array passes the test implemented by the provided function.
//  It returns a Boolean value.

let numbersArray:number[] = [1, 2, 3, 4, 5];
const divisibleby3 = numbersArray.some(num => num % 3 === 0);
console.log("Is there any number divisible by 3 ? ", divisibleby3);

const divisibleby6 = numbersArray.some(num => num % 6 === 0);
console.log("Is there any number divisible by 6 ? ", divisibleby6);

const numberCheckPositive = numbersArray.some(num => num > 0);
console.log("Is there any positive number ? ", numberCheckPositive);

const numberCheckNegative = numbersArray.some(num => num < 0);
console.log("Is there any negative number ? ", numberCheckNegative);

// 6. every() - Tests whether all elements in the array pass the test implemented by the provided function.

const allEvenNumbers = numbersArray.every(num => num % 2 === 0);
console.log("Are all numbers even ? ", allEvenNumbers);

const allNumsPositive = numbersArray.every(num => num > 0);
console.log("Are all numbers positive ? ", allNumsPositive);

