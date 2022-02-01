"use strict";
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
        //JS idendentifies instanceof
    }
}
//# sourceMappingURL=app.js.map