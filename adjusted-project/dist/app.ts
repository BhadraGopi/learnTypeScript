interface Named{
    readonly name: string;
}
interface Greetable extends Named{
    
  
    greet(phrases: string):void;
}
class Person implements Greetable{
    //can implement multiple interfaces unlike inheritance
    name: string;
    age=52;
    constructor(n:string){
        this.name=n;
    }
    greet(phrases: string): void {
        console.log(phrases+' '+this.name);
    }
}
 let user1: Greetable;
// user1={
//     name:'Mat',
//    // age:20,
//     greet(phrase:string){
//         console.log(phrase+' '+this.name);
//     }
// };
 user1=new Person('Mat');
user1.greet('HI there-I am');
console.log(user1);