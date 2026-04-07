// increment  -- ++
// pre increment
// post increment

// decrement -- --
// pre decrement
// post decrement

let i:number = 10;

// ++i -- first increments i and then assigns
// i++ -- first assigns the value and then increments
// --i -- first decrements i and then assigns the value
// i-- -- first assigns and then perform decrement operation

let j = i++;
console.log(j); //10
console.log(i); // 11

// i = 11 , j = 10
j = ++i;
console.log(i); //12
console.log(j); //12

// i = 12,j=12
j = i--;
console.log(i); // 11
console.log(j); // 12

// i = 11,j=12
j = --i;
console.log(i); //10
console.log(j); //10

