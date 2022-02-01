"use strict";
const person = {
    name: 'Doll',
    age: 80,
    role: [3, 'author']
};
person.role.push('admin'); //doesn't show error as TS can't over write .push method
//person.role[1]=9; throws error
//person.role=[0,'admin,'user']; also throws ERROR
console.log(person.name);
//this does not create an object of type name and age, it just helps ts understand how the obj person would look like
//would work perf without it too
//Object types can be created for nested objects as well.
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
//object type of the same would be the following
//   {
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//       title: string;
//       description: string;
//     }
//ArrayObjects
const person2 = {
    name: 'Doll',
    age: 80,
    hobbies: ['read', 'sports'],
};
for (const hobby of person2.hobbies) {
    console.log(hobby.toLocaleUpperCase()); //this possible bcoz ts idetifies that hobbies is an array of string
    //console.log(hobby.map()); //ERROR as hobby will have string and .map operates on arrays.
}
let names; //implies names 
//Enum- Automatically enumerated global constant identifier. introduced by TS not part of JS
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["CLIENT"] = 1] = "CLIENT";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// Elemts will have numbs assigned to them automatically in order eg- ADMIN =0 and so on
const superhero = {
    name: 'Tony',
    age: 50,
    role: Role.ADMIN //means value of role is 0
};
//can be checked as as
if (superhero.role === Role.ADMIN) {
    console.log(superhero.name + "ia an admin");
}
//any Types
let jam; //jam is a varibale of type any
let jk; // jk is an array of anytype values
//It takes away every advantages that TS gives you and the variable will be used as it wouild be in vanila JS
//SO it can be used as a fall back if you absolutely need a varibale which we dont the the type of
//Union Types, a funtn that accepts two diff type of values.
function combine(input1, input2) {
    let result;
    // result=input1+input2; // ERROR operator + cannot be applied to union types 
    if (typeof input1 === 'number' && input2 === 'number') {
        result = input1 + input2;
        //this avoids the error 
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedNmaes = combine('Ann', 'Maria');
const combinedAges = combine(1, 10);
//literal Type
//example if we needed the above function to have a specific type result
function combineLit(input1, input2, resultConversion //implies resultConversion is of literal type and 
//can only take these two values
) {
    let result;
    if (typeof input1 === 'number' && input2 === 'number' && resultConversion === 'as-number') {
        result = input1 + input2;
        //this avoids the error 
        // || resultConversion still shows error but && doesn't
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAgesLit = combineLit(1, 10, 'as-number');
//o/p will be 11
const combinedNmaesLit = combineLit('ann', 'maria', 'as-text');
const result = 21;
const rr = 'tom';
const u1 = { name: 'Max', age: 30 };
//For example, you can simplify this code:
// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
//   }
//   function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
//   }
//to
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
//# sourceMappingURL=objs-arrays-enum.js.map