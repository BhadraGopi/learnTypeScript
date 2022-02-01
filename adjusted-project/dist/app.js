"use strict";
var _a;
const e1 = {
    name: 'Kim',
    priviledges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        //this is a type guard using typeof
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('Name:' + emp.name);
    if ('priviledges' in emp) {
        console.log('Priviledges:' + emp.priviledges);
    }
    if ('startDate' in emp) {
        console.log('Start Date:' + emp.startDate);
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log('Driving a Car..');
    }
}
class Truck {
    drive() {
        console.log('Driving a Truck..');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(900);
        //JS idendentifies instanceof as Truck here is a class but won't work for Interfaces
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    //descriminated unions
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed' + speed);
}
const errorBag = {
    email: 'Not valid email!',
    username: 'Must start with a capital character'
};
const value = add('Max', 'Soju');
value.split(''); //is poossible bcoz TS identifies the value will be a string
const UserData = {
    id: 'u7',
    name: 'Tom',
    job: { title: 'CEO', description: 'Own Company' }
};
console.log((_a = UserData === null || UserData === void 0 ? void 0 : UserData.job) === null || _a === void 0 ? void 0 : _a.title);
//Optional Chanining to avoid run time error when a property of a nested object is missing
const userInput = '';
//const storedData= userinput | 'DEAFULT'; // would go to default even for empty string
const storedData = userinput !== null && userinput !== void 0 ? userinput : 'DEFAULT'; //explicitly chceks id its null or undefined
console.log(storedData);
//# sourceMappingURL=app.js.map