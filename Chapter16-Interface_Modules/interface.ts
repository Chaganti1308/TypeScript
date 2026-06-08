//interfaces
// regular properties
interface Person {
    name : string;
    age : number;
}

// created a student object of type Person
let student : Person = {
    name : "Honey",
    age : 30
}

// Accesing data
console.log(student.name);
console.log(student.age);

// conditional properties
interface Employee{
    name : string;
    id : number;
    dept ?: string

}

let emp : Employee = {
    name : "Nc",
    id : 282,

}

console.log(emp.name, emp.id, emp.dept);

interface Book{
    title:string;
    readonly author:string;
    display() : void; // abstract method
}

let b1 : Book = {
    title : "Master Javascript",
    author : "NC",

    display() {
        console.log(`${b1.title} : ${b1.author}`);
        
    }
}
console.log("Before changing");
console.log(b1.title);

console.log("After changing");
b1.title = "Learn PW";
// b1.author = "Neeha";
console.log(b1.title);


// class implements interface

interface Animals{
    name:string;
    sound():void;
}

class Cat implements Animals{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    sound() {
        console.log("Meow -- Meow");
        
    }
}

let c1 = new Cat("NC");
console.log(c1. name);
c1. sound();

