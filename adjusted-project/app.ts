const person:{
    name:string;
    age:number;
}={
   
    name: 'Doll',
    age:80, 
};
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
  }
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
const person2={
    name: 'Doll',
    age:80, 
    hobbies:['read','sports']
};
for(const  hobby of person2.hobbies){
    console.log(hobby.toLocaleUpperCase()); //this possible bcoz ts idetifies that hobbies is an array of string
//console.log(hobby.map()); //ERROR as hobby will have string and .map operates on arrays.
}
let names: string[];//implies names is an array of the type string meaning it will only contain string values