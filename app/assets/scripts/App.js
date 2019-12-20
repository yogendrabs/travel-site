import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {

        console.log("Adult Class");

        console.log(this);
        
        console.log(this.name + " pays $0 taxes.");
    }
}

var john = new Person("John", "blue");
john.greet();

var jane = new Adult("Jane", "pink");
jane.greet();
jane.payTaxes();