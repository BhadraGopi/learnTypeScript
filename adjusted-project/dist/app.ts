//Intersection Types
type Admin={
    name: string;
    priviledges:string[];
};
type Employee={
    name: string;
    startDate: Date;
}

type ElevatedEmployee=Admin&Employee;
const e1: ElevatedEmployee={
    name:'Kim',
    priviledges:['create-server'],
    startDate: new Date()
}
type Combinable = string|number;
type Numeric=number|boolean;
type Universal= Combinable& Numeric;
function add(a:Combinable,b:Combinable){
    if(typeof a==='string' || typeof b==='string'){
        //this is a type guard using typeof
        return a.toString()+ b.toString();
    }
    return a+b;
}
type UnknownEmployee= Employee|Admin;
function printEmployeeInfo(emp: UnknownEmployee){
    console.log('Name:'+emp.name);
    if('priviledges' in emp){
        console.log('Priviledges:'+ emp.priviledges);
    }
    if('startDate' in emp){
        console.log('Start Date:'+ emp.startDate);
    }
}
printEmployeeInfo(e1);
class Car{
    drive(){
        console.log('Driving a Car..');
}}
class Truck{
    drive(){
        console.log('Driving a Truck..');
}
loadCargo(amount:number){
    console.log('Loading cargo...'+ amount);
}
}
type Vehicle= Car|Truck;
const v1=new Car(); const v2= new Truck();
function useVehicle(vehicle:Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(900);
        //JS idendentifies instanceof
    }
}
