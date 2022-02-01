class Department{
    name: string; //field of the class NOT an object
  
    constructor(n:string){
this.name=n;
    }
    describe(this: Department){
        console.log('Department' + this.name)
        //the this keyword points to the variables that belong to this class
    }
}
const accounting= new Department('Accounting');//the object is initialized
console.log(accounting);
//op will be Department {name:'Accounting'}
accounting.describe();
const accoundingCopy={name:'s',describe: accounting.describe};
//assigning describe property to the object accounding.describe not based on class but as a dummy object
  accoundingCopy.describe();//the error here is fixedd by changing accoundingCopy and giving passing the name parameter and therefor op will be s
  //o/p is undefined.
//its bcoz the this here is refering to the object tat is responsible for calling the function viz accoundingCopy
//the work around should be to have a this parameter in the describe fn.
//the type of this here must be the name of our class which will ensure the arg passed will always be an instance based on the department class
