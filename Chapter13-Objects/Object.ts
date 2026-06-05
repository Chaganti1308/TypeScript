// Objects
// employee -- name, designation,salary,dept
// bonus(), getEmpDetails(), setEmpDetails()

// student -- name,id,grade
// getdetails(), setdetails()


// employee object
let employee : object = {
    emp_name : "NC",
    emp_id : 4300,
    emp_designation : "QA",
    salary : 50000
}

let student =  {
    name : "MR",
    grade : 2,
    age : 6,
    getDetails:function(){
        console.log(this.name, this.grade, this.age);
        return `Name : ${this.name}, Grade: ${this.grade}, Age : ${this.age}`
        
    }
}

// Accessing elements
// student.getDetails();
console.log(student.getDetails());
console.log("Grade : ",student.grade);

 
let employees = {
    emp_name : "Neeha",
    emp_id : 4300,
    emp_designation : "QA",
    emp_salary : 50000,
    getInfo:function(){
        console.log(`Employee name is  ${this.emp_name} having id ${this.emp_id} designated as ${this.emp_designation} getting a salary of ${this.emp_salary}` );
        // return `Name : ${this.name}, Grade: ${this.grade}, Age : ${this.age}`
        
    }
}

// Accessing elements
console.log(employees.emp_name);
console.log(employees['emp_salary']);
employees.getInfo();


// Modifying elements
employees['emp_designation'] = "Sr.QA";
employees.emp_salary = 80000;
console.log("Updated Info");
employees.getInfo();

console.log("Employees Object:" , employees);


// inline type object 
let students:{
    name:string,
    age:number,
    grade:string,
    getSummary:() => void
} = {
    name:"RC",
    age : 7,
    grade : "A",
    getSummary : function()
    {  
        console.log(`My name is ${this.name} and ${this.age} is old. And securing grade ${this.grade}`);
        
    }
}

console.log(students);
console.log(students.getSummary());

let student1:{
    name:string,
    age:number,
    grade:string,
    getSummary:() => void
} = {
    name:"RC",
    age : 7,
    grade : "A",
    getSummary : function()
    {  
        console.log(`My name is ${this.name} and ${this.age} is old. And securing grade ${this.grade}`);
        
    }
}

console.log(student1);
console.log(student1.getSummary());

//using type alias
// Ex 1
type Product = {
    name: string,
    price:number,
    getInfo:() => string
}

let book:Product = {
    name : "The Ramayana",
    price : 500,
    getInfo : function () {
        return `Book name is ${this.name} and price is ${this.price}`; 
    }
}

console.log(book);
console.log(book.getInfo());

let Laptop:Product = {
    name : "Lenovo",
    price : 100000,
    getInfo : function () {
        return `Laptop name is ${this.name} and price is ${this.price}`; 
    }
}

console.log(Laptop);
console.log(Laptop.getInfo());

// =======================================
// Using classes
class Person {
    ssn:number;
    firstname:string;
    lastname:string;

    // constructor(ssn:number, fname:string, lname:string){
    constructor(ssn:number, firstname:string, lastname:string){
        this.ssn = ssn;
        this.firstname = firstname;
        this.lastname = lastname;
        // this.ssn = ssn;
        // this.firstname = fname;
        // this.lastname = lname;
    }
    getFullName():string {
        return `${this.firstname} ${this.lastname}`;
    }

    getDetails():string{
        return`SSN : ${this.ssn}, Name: ${this.getFullName()}`
    }
}

let person1 = new Person(1234567890,"John","Doe");
let person2 = new Person(12345670,"Aline","Smith");
let person3 = new Person(12367890,"Krishiv","Rama");
console.log(person1);
console.log(person1.getFullName());
console.log(person1.getDetails());

console.log(person2);
console.log(person2.getFullName());
console.log(person2.getDetails());

console.log(person3);
console.log(person3.getFullName());
console.log(person3.getDetails());