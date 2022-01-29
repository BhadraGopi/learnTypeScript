function add(n1:number, n2:number, showResult:boolean, phrase: string){
// if(typeof n1 !=='number'|| typeof n2 !== 'number'){
// throw new Error('Incorrect input!'); //this error will only thrown during run time and not compile time
// this is how you would do  in js
// }
const result= n1+n2;
if(showResult){
    console.log(phrase+result);
}else{
    return result;
}
}
let number1: number;//error will be shown during compile time of wrong type is assigned
number1=5;
const number2= 9.8;
const printResult= true;
const resultPhase = 'Result is: ';

add(number1,number2, printResult, resultPhase);