// Access Modifiers : private, public, protected

class Person{
    public name:string;
    protected age:number;
    private aadhar:number;

    constructor(name:string,age:number,aadhar:number){
        this.name = name;
        this.age = age;
        this.aadhar = aadhar;
    }

    displayInfo(){
        console.log("Name : ",this.name);
        console.log("Age : ",this.age);
        console.log("Aadhar : ",this.aadhar);
        
    }
}

class Employee extends Person{
    private empId : number;

    constructor(name:string, age:number, aadhar:number, empId:number){
        super(name,age,aadhar);
        this.empId = empId;
    }

    showEmpDetails(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        // console.log(`Aadhar : ${this.aadhar}`); // it is accessible with in the class only.
        console.log(`EmpId : ${this.empId }`);
        
    }
}

let emp = new Employee("NC",30,12345,1001);
emp.displayInfo();
emp.showEmpDetails();
// console.log(emp.aadhar); // can't be ccessed because it is private to that class only.
