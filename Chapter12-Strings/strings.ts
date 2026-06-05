// string declaration
let str1:string = "Hello, TypeScript!";
let str2:string = 'Welcome to TypeScript programming.';
let str3:string = `TypeScript is a superset of JavaScript.`;

console.log(str1);
console.log(str2);
console.log(str3);  

let myName: string = "NC";
let greeting: string = `Hello, ${myName}! Welcome...`;
console.log(greeting);

let myAge: number = 30;
let ageMessage: string = `I am ${myAge} years old.`;
console.log(ageMessage);

let str : string = "TypeScript is great!";

// 1. length : how many no of characters
console.log("Length of string is :",str.length);

// 2. toUpperCase() : converts string to uppercase
console.log("Uppercase string is :",str.toUpperCase()); 

// 3. toLowerCase() : converts string to lowercase
console.log("Lowercase string is :",str.toLowerCase()); 

// 4. indexOf() : returns the index of first occurrence of a specified value in a string
// charAt() : returns the character at a specified index in a string

console.log(str.indexOf('s'));
console.log(str.indexOf('z'));
console.log(str.charAt(7));
console.log(str.charAt(21));

// 5. substring() -- extracts the sub string from the original string.
console.log("Sub string is : ",str.substring(7,15));
console.log("Sub string is : ",str.substring(10,));

// 6. includes() -- substring is a part of main string or not
console.log(str.includes('is'));
console.log(str.includes('has'));


// 7. startsWith () , endsWith() -- returns boolean value
console.log(str.startsWith('hi'));
console.log(str.startsWith('Type'));
console.log(str.endsWith('..!'));
console.log(str.endsWith('great!'));

// 8. replace() -- replaces the old string with new string
console.log(str.replace('great!',' a Programming Language..!'));

// 9. split() -- breaks the string into multiple parts using delimeters and returns array
let splittedString = str.split(' ');
console.log("Splitted Array : ", splittedString);
for(let arr of splittedString){
    console.log(arr);   
}

// 10. trim() , trimStart(), trimEnd() -- trims the spaces in the string.
let message = "   Hello.. Good Morning..!";
console.log(message);
console.log("with trim start method : ", message.trimStart());
console.log("with trim start method : ", message.trimEnd());
console.log("with trim start method : ", message.trim());

// 11. concat() - used to concat two or more strings
let firstName = "Neeharika ";
let lastName = "Chaganti";
let fullName = firstName.concat(lastName);
let fname = firstName + lastName;
console.log(fullName);
console.log(fname);

// immutable -- can't change the original value
let num = 10;
let res = num + 5;
console.log(num);
console.log(res);

let stringCheck = "Welcome";
let modifiedString = stringCheck.concat(" to TS..!");
console.log(stringCheck);
console.log(modifiedString);

// multiline string
let multiLineString = `Welcome 
                        To 
                        Home..`;
console.log(multiLineString);


