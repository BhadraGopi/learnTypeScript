// function Logger(constructor:Function){
//     console.log('Logging...');
//     console.log(constructor);
// }
//Replacing the decorator with a decorator factory
function Logger(logString: string){
    return  function (constructor:Function){
            console.log(logString);
            console.log(constructor);
}
}
function WithTemplate(template:string, hookId:string){
    return function(_:Function){
        const hookEl=document.getElementById(hookId);
        if(hookEl){
            hookEl.innerHTML=template;
        }
    }
}
 @Logger('LOGGING-PERSONALITY')
@WithTemplate('<h1>My Person Object</h1>','app')
class Personality{
    name='Max';
    constructor(){
        console.log('Creating person object...');
    }
}
 //const pers= new Personality();
 //---

 function Log(target: any, propertyName:string|Symbol){
     console.log('Property decorator!');
     console.log(target, propertyName);
     //example of property decorator
 }
 //Access decorator
 function Log2(target:any, name:string, descriptor: PropertyDecorator){
     console.log('Accessor decorator!');
     console.log(target);
     console.log(name);
     console.log(descriptor);
 }
//Method decorator

 class Product{
     @Log
     title: string;
     private _price: number;
     @Log2
     set price(val:number){
         if(val>0){
             this._price=val;
         }else{
             throw new Error('Invalid price - should be positive!');
         }
     }
constructor(t:string, p:number){
    this.title=t;
    this._price=p;
}
getPriceWithTax(tax:number){
return this._price*(1+tax);
}
 }