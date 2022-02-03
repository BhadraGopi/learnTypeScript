//Validation
interface Validatable{
    value?: string| number;
    required?: boolean;
    minLength?:number;
    maxLength?:number;
    min?:number;
    max?:number;
}
function validate(ValidatableInput: Validatable){
    let isValid = true;
    if(ValidatableInput.required){
isValid= isValid && ValidatableInput.value?.toString().trim().length !==0;
    }
    if(
        ValidatableInput.minLength !=null &&
        typeof ValidatableInput.value === 'string'
    ){
        isValid=
        isValid && ValidatableInput.value.length> ValidatableInput.minLength;
    }
    if(
        ValidatableInput.maxLength !=null &&
        typeof ValidatableInput.value === 'string'
    ){
        isValid=
        isValid && ValidatableInput.value.length> ValidatableInput.maxLength;
    }
    if(ValidatableInput.min !=null && typeof ValidatableInput.value==='number'){
        isValid= isValid
        && 
        ValidatableInput.value>ValidatableInput.min;
    }
    if(ValidatableInput.max !=null && typeof ValidatableInput.value==='number'){
        isValid= isValid
        && 
        ValidatableInput.value<ValidatableInput.max;
    }
    return isValid;
}
//auto bind decorator
// function autobind(_:any, _2: string, descriptor: PropertyDescriptor){
//     const originalMethod= descriptor.value;
//     const adjDescriptor: PropertyDescriptor={
//         configurable:true,
//         get(){
//            // const boundFn=originalMethod.bind(this);
//             return adjDescriptor;
//         }
        
//     }
// }
//Project input class
class ProjectInput{
    //The whole purpose of the class is basicallyto render the form
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement:HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    constructor(){
        //accessing the html element
this.templateElement= document.getElementById('project-input')! as HTMLTemplateElement;
//accesing the host element where the content will be desplayed or where the form will be rendered
this.hostElement= document.getElementById('app')! as HTMLDivElement;
//to render the content from the host, the true reps that we need to access the nested elems as well
const importedNode= document.importNode(this.templateElement.content,true);
this.element= importedNode.firstElementChild as HTMLFormElement;
this.element.id='user-input';
//getting access to dif inputs in the form before attaching the form
this.titleInputElement=this.element.querySelector('#title') as HTMLInputElement;
this.descriptionInputElement=this.element.querySelector('#description') as HTMLInputElement;
this.peopleInputElement=this.element.querySelector('#people') as HTMLInputElement;
this.configure();
this.attach();
}
private gatherUserInput():[string,string,number]|void{
const enteredTitle= this.titleInputElement.value;
const enteredDescription= this.descriptionInputElement.value;
const enteredPeople= this.peopleInputElement.value;
const titleVlaidatable: Validatable={
    value: enteredTitle,
    required: true,
    minLength:5
};
const descriptionVlaidatable: Validatable={
    value: enteredDescription,
    required: true,
    minLength:5
};
const peopleVlaidatable: Validatable={
    value: enteredPeople,
    required: true,
    min:1,
    max:5
};
if(
   validate(titleVlaidatable)||
   validate(descriptionVlaidatable)||
   validate(peopleVlaidatable)
    ){
        alert('invalid input, please try again');
        return;
}else{
    
    return[enteredTitle,enteredDescription,+enteredPeople]
}
}
private clearinput(){
    this.titleInputElement.value='';
    this.descriptionInputElement.value='';
    this.peopleInputElement.value='';
}
//@autobind
private submitHandler(event:Event){
    event.preventDefault();
   //console.log(this.titleInputElement.value);
   const userInput=this.gatherUserInput();
   if(Array.isArray(userInput)){
       const[title, desc,people]=userInput;
       console.log(title,desc,people);
       this.clearinput();
   }
}
private configure(){
    this.element.addEventListener('submit', this.submitHandler.bind(this));
}
private attach(){
    //it'll open right at the begining of the opening tag
    this.hostElement.insertAdjacentElement('afterbegin',this.element);
}
}
const prjInput= new ProjectInput();