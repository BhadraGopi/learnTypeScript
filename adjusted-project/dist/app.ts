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
//function overload
function add(a:number,b:number):number
function add(a:string,b:string):string
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
        //JS idendentifies instanceof as Truck here is a class but won't work for Interfaces
    }
}
useVehicle(v1); useVehicle(v2);

interface Bird{
    type:'bird';
    flyingSpeed:number;
}
interface Horse{
    type:'horse';
    runningSpeed: number;
}
type Animal=Bird|Horse;
function moveAnimal(animal:Animal){
    let speed;
    //descriminated unions
    switch(animal.type){
        case'bird':
        speed=animal.flyingSpeed;
        break;
        case'horse':
        speed=animal.runningSpeed;
    }
    console.log('Moving at speed'+ speed);
}
interface ErrorContainer{
    //defining index type, can't use boolean here
    [prop: string]:string;
}
const errorBag: ErrorContainer={
    email: 'Not valid email!',
    username: 'Must start with a capital character'
}
const value = add('Max','Soju');
value.split('');//is poossible bcoz TS identifies the value will be a string

const UserData={
    id:'u7',
    name:'Tom',
    job:{ title: 'CEO', description:'Own Company'}
};
console.log(UserData?.job?.title);
//Optional Chanining to avoid run time error when a property of a nested object is missing