// Array Examples
// Example 1: Creating and Accessing Arrays
let carBrands:string[] = ["Toyota", "Honda", "Ford", "BMW", "KIA", "Hyundai" , "Mercedes", "Audi", "Volkswagen", "Nissan"];

console.log("Orignal Array : ", carBrands);
const carBrandsLength = carBrands.length;
console.log("Length of the Array : ", carBrandsLength);

// Accessing elements in the array
console.log("First Brand : ", carBrands[0]);
console.log("Last Brand : ", carBrands[carBrandsLength - 1]);

// Extract the array values using for loop
// Extracting car brands using for loop : 
console.log("Car Brands are :");

for(let i = 0 ; i< carBrandsLength ; i++){
    console.log(carBrands[i]);
}


// Ex : 2

// for .. in loop
// for .. of loop

// extracts elements one by one
//  for .. in loop : returns the index of the array elements 
// like 0,1,2,3,4,5,6,7,8,9
for(const brand in carBrands){
    console.log("Brand : ", carBrands[brand]);
}

// for .. of loop
// for .. of loop : returns the value of the array elements
// like Toyota, Honda, Ford, BMW, KIA, Hyundai , Mercedes, Audi, Volkswagen, Nissan
for(const brand of carBrands){
    console.log("Car Brand : ", brand);
}


