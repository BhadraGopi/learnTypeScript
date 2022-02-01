class Department{
    name: string; //field of the class NOT an object
  
    constructor(n:string){
this.name=n;
    }
}
const accounting= new Department('Accounting');//the object is initialized
console.log(accounting);
//op will be Department {name:'Accounting'}