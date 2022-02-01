"use strict";
let addF;
addF = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 52;
        if (n) {
            this.name = n;
        }
    }
    greet(phrases) {
        console.log(phrases + ' ' + this.name);
    }
}
let user1;
// user1={
//     name:'Mat',
//    // age:20,
//     greet(phrase:string){
//         console.log(phrase+' '+this.name);
//     }
// };
user1 = new Person('Mat');
user1.greet('HI there-I am');
console.log(user1);
//# sourceMappingURL=app.js.map