"use strict";
// //A generic type is atype that's connected to another type and is flexible regarding what that other type is
// const Texts: Array<string>=[];//same as string[]
//  const promise: Promise<string>= new Promise((resolve, reject)=>{
//      setTimeout(()=>{
//          resolve('This is done');
//     },2000);
//  });
//  promise.then(data=>{
//      data.split('');//posible bcox the promise is of type string
//  })
//CREATING A GENERIC FUNCTION
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Mat' }, { age: 40 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements.';
    }
    return [element, descriptionText];
}
//keyof constraint
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
//Generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addTtem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
        //not the best way to work with non primitive types like objects
        //if this function doesn't find an item at the specified position it removes the last item 
        //can always check there is a value and fix it but isn't ideal for objects
    }
    getItems() {
        return [...this.data];
    }
}
const textStorgae = new DataStorage();
textStorgae.addTtem('Max');
textStorgae.addTtem('Manu');
textStorgae.removeItem('Manu');
console.log(textStorgae.getItems());
const numberStorgae = new DataStorage();
numberStorgae.addTtem(56);
numberStorgae.addTtem(90);
//numberStorgae.removeItem(90);
console.log(numberStorgae.getItems());
// const objectStorgae= new DataStorage<object>();
// const maxObj={name:'Max'};//inorder to fix the problem of reference type we store it explicitly in memory like this
// objectStorgae.addTtem({name:'Manu'});
// objectStorgae.addTtem(maxObj);
// objectStorgae.removeItem(maxObj);
// console.log(numberStorgae.getItems());
//But ofcourse better to avoid such errors we can ensure that this generic only work with primitive types
//By giving T extends primitive types
//Also the class can have more than one genric types and functioons with their own genric type
//# sourceMappingURL=app.js.map