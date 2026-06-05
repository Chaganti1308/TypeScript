// Inheritance

class Car{
    name : string;
    color : string;
    model : string;

    constructor(name:string, color:string, model : string){
        this.name = name;
        this.color = color;
        this.model = model;
    }
    start(){
        console.log("Car started...");
        
    }
    stop(){
        console.log("Car stopped...");
    }
    displayCarInfo(){
        console.log(`
            Car Name: ${this.name}, 
            Color: ${this.color}, 
            Model: ${this.model}`);
    }
}

class Honda extends Car{
    year : number;

    constructor(name:string, color:string, model : string, year : number){
        super(name, color, model);
        this.year = year;
    }
    // method overriding
    start(){
        console.log("Honda started...");
        
    }
    // method overriding
    stop(){
        console.log("Honda stopped...");
    }
    displayYOM(){
        console.log(`
            Car Name : ${this.name},
            Car color : ${this.color},
            Car Model : ${this.model},
            Year of Manufacture : ${this.year}`);
        
    }
}

class Maruthi extends Car{
    year : number;

    constructor(name:string, color:string, model : string, year : number){
        super(name, color, model);
        this.year = year;
    }   
    // method overriding
    start(){
        console.log("Maruthi started...");  
    }
    // method overriding
    stop(){
        console.log("Maruthi stopped...");
    }           
    displayYOM(){
        console.log(`
            Car Name : ${this.name},    
            Car color : ${this.color},
            Car Model : ${this.model},
            Year of Manufacture : ${this.year}`);
        };
}

let car1 = new Car("Toyota", "Blue", "SUV");
car1.start();
car1.displayCarInfo();
car1.stop();

let hondaCity = new Honda("Honda City", "Red", "Sedan", 2020);
hondaCity.start();
hondaCity.displayYOM();
hondaCity.stop();

let hondaCivic = new Honda("Honda Civic", "Black", "Sedan", 2022);
hondaCivic.start();
hondaCivic.displayYOM();
hondaCivic.stop();

let maruthiSwift = new Maruthi("Maruthi Swift", "White", "Hatchback", 2021);
maruthiSwift.start();
maruthiSwift.displayYOM();
maruthiSwift.stop();