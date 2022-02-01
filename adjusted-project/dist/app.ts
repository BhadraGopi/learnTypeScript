//type AddFn=(a:number, b:number)=>number;
interface AddFn{
    (a:number,b:number):number;
    //interface as a function type
}
let addF: AddFn;
addF=(n1:number, n2:number)=>{
return n1+n2;
};
interface Named{
    readonly name: string;
}
interface Greetable extends Named{
    //multiple interfaces can be extended by adding along after coma
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