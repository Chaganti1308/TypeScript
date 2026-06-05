let numArray:number[] = [1, 2, 3, 4, 5];

let fruits:string[] = ["Apple", "Banana", "Cherry","Dragon","Fiji","Guava"];

console.log("Numbers Array : ", numArray);
console.log("Fruits Array : ", fruits);

// size of array -- arrayName.length
console.log("Size of numArray : ", numArray.length);
console.log("Size of fruits : ", fruits.length);


// 1. push() method - adds an element to the end of the array
numArray.push(6);
fruits.push("Honeydew");
console.log("After push() method : ");
console.log("Numbers Array : ", numArray);
console.log("Fruits Array : ", fruits); 

numArray.push(7, 8, 9);
fruits.push("Indian Fig", "Jackfruit");
console.log("After push() method with multiple elements : ");
console.log("Numbers Array : ", numArray);
console.log("Fruits Array : ", fruits);

// 2. pop() method - removes the last element from the array and returns it
let poppedNum = numArray.pop();
let poppedFruit = fruits.pop();
console.log("Popped Number : ", poppedNum);
console.log("Popped Fruit : ", poppedFruit);
console.log("After pop() method : ");
console.log("Numbers Array : ", numArray);
console.log("Fruits Array : ", fruits);

// 3. shift() method - removes the first element from the array and returns it  
let shiftedNum = numArray.shift();
let shiftedFruit = fruits.shift();
console.log("Shifted Number : ", shiftedNum);
console.log("Shifted Fruit : ", shiftedFruit);
console.log("After shift() method : ");
console.log("Numbers Array : ", numArray);
console.log("Fruits Array : ", fruits);

// 4. unshift() method - adds an element to the beginning of the array
numArray.unshift(0,10);
fruits.unshift("Avocado","Pear");
console.log("After unshift() method : ");
console.log("Numbers Array : ", numArray);
console.log("Fruits Array : ", fruits);

// 5. concat() method - merges two or more arrays and returns a new array
let moreNumbers = [11, 12, 13];
let moreFruits = ["Kiwi", "Lemon", "Mango"];    
let combinedNumbers = numArray.concat(moreNumbers);
let combinedFruits = fruits.concat(moreFruits);
// let combinedAll = moreNumbers.concat(moreFruits);
console.log("Combined Numbers Array : ", combinedNumbers);
console.log("Combined Fruits Array : ", combinedFruits);
// console.log("Combined All Array : ", combinedAll);

let evenMoreNumbers = combinedNumbers.concat([14, 15], [16, 17]);
console.log("Final array : ",evenMoreNumbers );

// 6. slice() method - returns a shallow copy of a portion of an array into a new array object
// starts from 0 index and ending will be exclusive
// slice(startIndex, endIndex)

let numbersArray:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedNumbers = numbersArray.slice(2, 6);
console.log("Original Numbers Array : ", numbersArray);
console.log("Sliced Numbers Array (from index 2 to 6) : ", slicedNumbers);

// 7. splice() method - changes the contents of an array by removing or 
//                      replacing existing elements and/or adding new elements 
//                      in place

// splice(startIndex, deleteCount, item1, item2, ...)

console.log("Number Array : ", numbersArray);
// Removing elements using splice() method
let removedElements = numbersArray.splice(3, 2);
console.log("Removed Elements : ", removedElements);
console.log("After removing elements using splice() method : ", numbersArray);

let removedAndAddedElements = numbersArray.splice(2, 3, 11, 12, 13,14,15);
console.log("Removed and Added Elements : ", removedAndAddedElements);
console.log("After removing and adding elements using splice() method : ", numbersArray);

// 8. indexOf() method - returns the first index at which a given element can be found in the array, 
// or -1 if it is not present
let carBrands:string[] = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
let indexOfHonda = carBrands.indexOf("Honda");
let indexOfMercedes = carBrands.indexOf("Mercedes");
console.log("Car Brands Array : ", carBrands);
console.log("Index of Honda : ", indexOfHonda);
console.log("Index of Mercedes : ", indexOfMercedes);

// 9. includes() method - determines whether an array 
// includes a certain value among its entries, 
// returning true or false as appropriate
let hasToyota = carBrands.includes("Toyota");
let hasMercedes = carBrands.includes("Mercedes");
console.log("Does the Car Brands Array include Toyota? ", hasToyota);
console.log("Does the Car Brands Array include Mercedes? ", hasMercedes);

// 10. toString() method - returns a string
//  representing the specified array and its elements
let numArrayString = numArray.toString();
let fruitsArrayString = fruits.toString();
console.log("Numbers Array as String : ", numArrayString);
console.log("Fruits Array as String : ", fruitsArrayString);