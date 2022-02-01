interface Person{
    name: string;
    age: number;
    greet(phrases: string):void;
}
let user1: Person;
user1={
    name:'Mat',
    age:20,
    greet(phrase:string){
        console.log(phrase+' '+this.name);
    }
};
user1.greet('HI there-I am')