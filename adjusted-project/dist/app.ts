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
 function merge<T extends object,U extends object>(objA:T, objB:U)
 {
     return Object.assign(objA,objB);
 }
 const mergedObj= merge({name: 'Mat'},{age:40});
 console.log(mergedObj.age);
 //Generic type constraints
 //by giving extends object it specifys that the parameter passed must be an obj
 //Another generic function.
 interface Lengthy{
     length:number;
 }
 function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
     let descriptionText='Got no value.';
     if(element.length===1){
         descriptionText='Got 1 element.';
     }else if(element.length>1){
         descriptionText= 'Got'+ element.length+'elements.';
     }
     return [element, descriptionText];
 }
 //keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
    obj:T,
    key:U
){
    return 'Value: '+ obj[key];
}
extractAndConvert({name:'Max'},'name');
//Generic classes
class DataStorage<T extends string|number|boolean>{
    private data: T[]=[];
    addTtem(item:T){
this.data.push(item);
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
        //not the best way to work with non primitive types like objects
        //if this function doesn't find an item at the specified position it removes the last item 
   //can always check there is a value and fix it but isn't ideal for objects
    }
    getItems(){
        return [...this.data];
    }
}
const textStorgae= new DataStorage<string>();
textStorgae.addTtem('Max');
textStorgae.addTtem('Manu');
textStorgae.removeItem('Manu');
console.log(textStorgae.getItems());
const numberStorgae= new DataStorage<number>();
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


//GENERIC  UTILITY TYPES
interface CourseGoal{
    title: string;
    description: string;
    completeUntil:Date;
}
function createCourseGoal(title: string,
    desciption: string,
    date:Date
    ):CourseGoal{
        let CourseGoal: Partial< CourseGoal>={};
        CourseGoal.title=title;
        CourseGoal.description=desciption;
        CourseGoal.completeUntil=date;
        return CourseGoal as CourseGoal;
        //because need to convert from partial to CourseGoal using type casting
    }
    const nameList: Readonly<string[]>=['Max','Jack'];
    //nameList.push('Manu');
    //another ex