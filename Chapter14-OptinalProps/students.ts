class Student{
    readonly studentId: number;
    readonly studentName: string;
    studentEmail?: string;
    schoolName?: string;
    
    constructor(sid:number, sname:string,semail?:string){
        this.studentId = sid;
        this.studentName = sname;
        this.studentEmail = semail;
    }

    // Methods
    displayStudentInfo(): void {
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Student Name: ${this.studentName}`);
        if(this.studentEmail){
            console.log("Email : ", this.studentEmail);
        }
        else{
            console.log("Email is not provided");
            
        }
        if(this.schoolName){
            console.log("School Name : ", this.schoolName);
        }
        else{
            console.log("School Name is not provided");
            
        }
    }
}

// Object instance
let s1 = new Student(101,"NC","NC@school.com");
s1.displayStudentInfo();

let s2 = new Student(102,"Nikhil");
s2.displayStudentInfo();

console.log(s1.studentId);


// static

class Person {
    name : string;
    static country : string = 'India';

    constructor(name:string){
        this.name = name; 
    }

    displayInfo(): void {
        //console.log(`Name: ${this.name}`);
        //console.log(`Country: ${Person.country}`);
        console.log(` I am ${this.name} from ${Person.country}`);
        
    }

    static changeCountry(newCountry:string): void{
        Person.country = newCountry;
    }
}

let p1 = new Person("NC");
let p2 = new Person("Nikhil");
console.log("Before changing static variable:");
p1.displayInfo();
p2.displayInfo();
Person.changeCountry("USA");
console.log("After changing static variable:");
p1.displayInfo();
p2.displayInfo();