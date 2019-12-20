class Person {
    constructor(fullName, color) {
        this.name = fullName;
        this.color = color;
    }
    greet() {
        console.log("Person Class");

        console.log(this);
        
        console.log("Hello, my name is " + this.name + " and my color is " + this.color + ".");
    }
}

export default Person;