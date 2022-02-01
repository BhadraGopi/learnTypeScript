  let userinput :unknown;
  let anyUserInput : any;
  let userName: string;

  userinput=9; userinput='tom';
  anyUserInput=54;
  //any type of values can be assigned but its diff from any type
 // userName=userinput; //ERROR 
 userName=anyUserInput;//No error viz the main diff
 //Inorder to avoid the error while using unknown just check the type bfore u sing
 if(typeof userinput === 'string'){
     userName= userinput;
     //Here userinput is guarenteed to be a string here
 }
 //Unknown is better than any because a slight amount of type control is still provided

 function generateERROR(message: string, code:number){
     throw{
         message:message, errorCode: code
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
const printOUT:(a:number|string)=>void = output=>console.log(output); 
//If there are no parameters an empty pair of parantheses is used 
()=>{}//Like so

//Default parameters/arguments in functions
//one argument can be a constant in cerrtain functions which can be set as
const adds=(a:number, b:number=1) =>a+b;
//the default arg should always be given to the far right, otherwise TS will assume it to be not default and assume the first input value is the value of said arg

//THE SPREAD OPERTAOR
//It operates on Arrays and objects, and is feature to retrive data from them
 const hobbies=['dance', 'sing'];
 const activeHobby=['sports'];
 //to add activeHobby to hobbies
 //activeHobby.push(hobbies); ERROR as hobbies is a string array and not a string
 activeHobby.push(...hobbies);//makes sure each elemnt of hobbies is pullled out and addedd to activeHobby as a seperate string
 //it can be done while creating an array also
 const newARR=['tap',...hobbies];
 //It also opertes on objects
 const Man={
     name:'Max',
     age:32
 }
 const copiedMan={...Man}; //it is NOT a pointer that points to 'Man' in memory but a perfect copy of the key value pair.
 