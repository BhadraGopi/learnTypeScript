//GETTER AND SETTER
abstract class DepartmentModified{
    protected employees: string[]=[];
    static fiscalyear=2020;
    constructor(protected readonly id:string, public name: string){

    }
    static createEmployee(name:string){
   return{name:name};
    }
    addEmployee(employee: string){
        this.employees.push(employee);
    }
abstract describe(this: DepartmentModified):void;
}
class AcountingDepartment extends DepartmentModified{
    private lastReport: string;
    private static instance: AcountingDepartment;
    //getter is to retrive a value and allows to apply more complex logic
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }else{
            throw new Error("no report found");
        
        }
       
    }
    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in valid value');
    }
this.addReport(value);
    }
  private  constructor(id:string, private reports:string[]){
        super(id,'Accounding');
        this.lastReport= reports[0];
    }
    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance=new AcountingDepartment('d2',[]);
        return this.instance;
    }
    addReport(text:string){
        this.reports.push(text);
        this.lastReport=text;
    }
    describe(this: DepartmentModified): void {
        console.log('Accounting Department-ID');
    }
}
//const accounding=new AcountingDepartment('d2',[]);
const accounding=AcountingDepartment.getInstance();
accounding.mostRecentReport="REPORT NEW";
console.log(accounding.mostRecentReport);

//accesed like a  property but will execute the defined method.
const employee1=DepartmentModified.createEmployee('Mat');
console.log(employee1,DepartmentModified.fiscalyear);