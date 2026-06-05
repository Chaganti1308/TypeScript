// super() -- is a method to call the constructor of the parent class. 
// It is used to initialize the properties of the parent class in the child class. 
// It is also used to call the methods of the parent class in the child class. 
// It is used to access the properties and methods of the parent class in the child class.

class Parent {
    num :number = 10;

    constructor(){
        console.log("This is parent class constructor");
        
    }

    display(){
        console.log("This is parent class display() method");
    }
}

class Child extends Parent {
    num : number = 20;

    constructor(){
        super(); // calling the parent class constructor
        console.log("This is child class constructor");
    }
    show(){
        console.log("This is show() method of child class");
        console.log("Value from child class num:", this.num);
        // error
        // console.log("Value from parent class num:", super.num); // accessing the parent class property using super
        
    }
    // this is overrided method of parent class
    display() {
        super.display(); // calling the parent class display method
        console.log("This is display() method of child class");
    }
}

let c1 = new Child();
c1.show();
c1.display();
