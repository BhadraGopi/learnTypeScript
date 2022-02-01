class Department{
    // name: string; //field of the class NOT an object
  protected employees: string[]=[];// means only accesible inside the particular class
  //in no modifier specified it's public by default
    constructor(public name:string, private readonly id:number ){
// this.name=n;
    }
    describe(this: Department){
        console.log('Department' + this.name)
        //the this keyword points to the variables that belong to this class
    }
    addEmployee(name:string){
        this.employees.push(name);
    }
}
const accounting= new Department('Accounting',2);//the object is initialized
console.log(accounting);
//op will be Department {name:'Accounting'}
accounting.describe();
const accoundingCopy={name:'s',describe: accounting.describe};
//assigning describe property to the object accounding.describe not based on class but as a dummy object
//  accoundingCopy.describe();//the error here is fixedd by changing accoundingCopy and giving passing the name parameter and therefor op will be s
  //o/p is undefined.
//its bcoz the this here is refering to the object tat is responsible for calling the function viz accoundingCopy
//the work around should be to have a this parameter in the describe fn.
//the type of this here must be the name of our class which will ensure the arg passed will always be an instance based on the department class


//INHERITANCE
class ITDepartment extends Department{
    constructor(id:string, public admins:string[]){
        super(id,5);//the constuctor of the Base class is invoked here
    }
    addEmployee(name: string): void {
        if(name==='Max'){
            return;
        }
        this.employees.push(name);
        //the function from Base class is overriden
    }
}
const IT=new ITDepartment('d1',['Tom']);
//consoling this would show both base class and ITDepartent fields