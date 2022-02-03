// function return types and void
function printResult(num: number):void{
    console.log('Result'+ num);
    //implies the function doesn't return anything
}
//but if we console.log(printResult(70));
    //the op will  be undefined
//but the return type of above function can't be undefined
//but it can be if we are indeed retuning an undefined value
//ex-
function pResult(num:number):undefined{
    console.log(num);
    return;
    //it essentialy rerturns an undefined value, 
    // but will throw error if return statement isn't present
//this ofcourse isn't used practically as it is unnecessary
} 
function add(num1:number, num2:number){
return num1+num2;
}
//FUNCTIONS as types
let combineValues;
combineValues=add; //adding pointer of a function to a variable, vanila JS
combineValues=5; //but not effective as combineValues anything  
let combValues: Function ;
//combValues=5; //ERROR because TS will only allow a function here
//but any function can be assigned to combValues.In order to set a specific type
let addValues: (a:number, b:number) =>number;
//implies addValues is a variable that can be assigned any function that take two numbers as parameters and returns a number .
addValues=add;//works
//addValues=printResult;//doesn't work ass the TYPE of function doesn't match.

//Function Types and call backs
function addHandle(n1:number, num2: number, cb: (num:number)=>void){
    const result=n1+num2;
    cb(result);
    //cb is a call back functn that maynot return anything but takes a number as an argument
} 
addHandle(10,20,(result)=>{
    console.log(result);
  //  return result; // TS doesn't pick up that it is a mistake that there is a return statement 
  // even though we declared prevsly that it is void fn
  //its not a bug but an intentional feature i.e we are actively IGNORING what the return value is.
// it essentially means whatevr you might return will not be used my addHandle
});
//op will be 30 viz the result of our cb
//ts infers the result of cb to be a number  as we specify the type of argument to be a number while calling it