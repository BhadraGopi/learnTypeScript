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
function createCourseGoal(title, desciption, date) {
    let CourseGoal = {};
    CourseGoal.title = title;
    CourseGoal.description = desciption;
    CourseGoal.completeUntil = date;
    return CourseGoal;
    //because need to convert from partial to CourseGoal using type casting
}
const nameList = ['Max', 'Jack'];
//nameList.push('Manu');
//another ex
//# sourceMappingURL=GenericClasses.js.map