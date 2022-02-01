//GETTER AND SETTER
class DepartmentModified{
    protected employees: string[]=[];
    constructor(private readonly id:string, public name: string){

    }
    addEmployee(employee: string){
        this.employees.push(employee);
    }
}
class AcountingDepartment extends DepartmentModified{
    private lastReport: string;
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
    constructor(id:string, private reports:string[]){
        super(id,'Accounding');
        this.lastReport= reports[0];
    }
    addReport(text:string){
        this.reports.push(text);
        this.lastReport=text;
    }
}
const accounding=new AcountingDepartment('d2',[]);
accounding.mostRecentReport="REPORT NEW";
console.log(accounding.mostRecentReport);

//accesed like a  property but will execute the edfined method.