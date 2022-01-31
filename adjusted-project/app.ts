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
} 