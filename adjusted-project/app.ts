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