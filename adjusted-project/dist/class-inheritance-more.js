"use strict";
class Department {
    //in no modifier specified it's public by default
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // name: string; //field of the class NOT an object
        this.employees = []; // means only accesible inside the particular class
        // this.name=n;
    }
    describe() {
        console.log('Department' + this.name);
        //the this keyword points to the variables that belong to this class
    }
    addEmployee(name) {
        this.employees.push(name);
    }
}
const accounting = new Department('Accounting', 2); //the object is initialized
console.log(accounting);
//op will be Department {name:'Accounting'}
accounting.describe();
const accoundingCopy = { name: 's', describe: accounting.describe };
//assigning describe property to the object accounding.describe not based on class but as a dummy object
//  accoundingCopy.describe();//the error here is fixedd by changing accoundingCopy and giving passing the name parameter and therefor op will be s
//o/p is undefined.
//its bcoz the this here is refering to the object tat is responsible for calling the function viz accoundingCopy
//the work around should be to have a this parameter in the describe fn.
//the type of this here must be the name of our class which will ensure the arg passed will always be an instance based on the department class
//INHERITANCE
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 5); //the constuctor of the Base class is invoked here
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
        //the function from Base class is overriden
    }
}
const IT = new ITDepartment('d1', ['Tom']);
//consoling this would show both base class and ITDepartent fields
//# sourceMappingURL=app.js.map