"use strict";
let userinput;
let anyUserInput;
let userName;
userinput = 9;
userinput = 'tom';
anyUserInput = 54;
//any type of values can be assigned but its diff from any type
// userName=userinput; //ERROR 
userName = anyUserInput; //No error viz the main diff
//Inorder to avoid the error while using unknown just check the type bfore u sing
if (typeof userinput === 'string') {
    userName = userinput;
    //Here userinput is guarenteed to be a string here
}
//Unknown is better than any because a slight amount of type control is still provided
function generateERROR(message, code) {
    throw {
        message: message, errorCode: code
    };
}
generateERROR('An error occured', 900);
//this actually doesn't show anything not even undefined 
//thats coz the fn returns a never value by default althoughthe hover shows void
//It's actually never as this  function breaks the script another example would be a function with an infinite loop.
// ARROW FUNCTIONS
// const  PrintOUT: void(x:number|string) {
//     console.log(x);
// } this can actually be written as below(as it contains only one arguemt )
const printOUT = output => console.log(output);
//If there are no parameters an empty pair of parantheses is used 
() => { }; //Like so
//Default parameters/arguments in functions
//one argument can be a constant in cerrtain functions which can be set as
const adds = (a, b = 1) => a + b;
//the default arg should always be given to the far right, otherwise TS will assume it to be not default and assume the first input value is the value of said arg
//THE SPREAD OPERTAOR
//It operates on Arrays and objects, and is feature to retrive data from them
const hobbies = ['dance', 'sing'];
const activeHobby = ['sports'];
//to add activeHobby to hobbies
//activeHobby.push(hobbies); ERROR as hobbies is a string array and not a string
activeHobby.push(...hobbies); //makes sure each elemnt of hobbies is pullled out and addedd to activeHobby as a seperate string
//it can be done while creating an array also
const newARR = ['tap', ...hobbies];
//It also opertes on objects
const Man = {
    name: 'Max',
    age: 32
};
const copiedMan = Object.assign({}, Man);
//it is NOT a pointer that points to 'Man' in memory but a perfect copy of the key value pair.
//REST PARAMETERS
//Rest parameters comes in when you wanna accept 'n' number of inputs values somewhere
const added = (...numbers) => {
    return numbers.reduce((currResult, currValues) => {
        return currResult + currValues;
    }, 0);
};
//can input any number of parametes
const addedNumbers = added(2, 5, 4, 7, 9);
console.log(addedNumbers);
//All the input values will be merged into an array
//A tuple can also be used to set the number and type of input values
//Array and Object DESTRUCTURING(pulling elements out of em)
//instead of doing
// const hobby1=hobbies[0];
// const hobby2=hobbies[1];
//we can write
const [hobby1, hobby2] = hobbies; //This pulls out elements out in order and puts them in the array in the same order.
//or if array had more elements
// const[hobby1,hobby2,...remainingHobbies]=hobbies;
//the new array called remaining hobbies will contain the rest of the values.
//in case of objects
const { name: fullname, age } = Man;
//the elemets are not pulled out inorder but by key-value pair
//fullname is NOT a type assertment but overriding the keyword
console.log(name, age); //doesn't show name
console.log(fullname, age); //does show the name.
//# sourceMappingURL=nextGenFunctions.js.map