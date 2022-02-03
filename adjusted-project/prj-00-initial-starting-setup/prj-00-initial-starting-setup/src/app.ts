//Project State Management
class ProjectState{
    private listners:any[]=[];
    private projects:any[]=[];
    private static instance: ProjectState;
    private constructor(){}
    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance=new ProjectState();
        return this.instance;
    }
    addListener(listenerFn: Function){
        this.listners.push(listenerFn);
    }
    addProject(title:string, description:string, numOfPeople: number){
const newProject={
    id: Math.random().toString(),
    title:title,
    description: description,
    people: numOfPeople
};
this.projects.push(newProject);
for(const listnerfn of this.listners){
    listnerfn(this.projects.slice());
}
}
}
const projectState= ProjectState.getInstance();
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
// } //Has errors because of version issues
class ProjectList{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    assignedProjects!: any[];
    constructor(private type:'active'| 'finished'){
        this.templateElement= document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement= document.getElementById('app')! as HTMLDivElement;
this.assignedProjects=[];
const importedNode= document.importNode(this.templateElement.content,true);
this.element= importedNode.firstElementChild as HTMLElement;
this.element.id=`${this.type}-projects`;
projectState.addListener((projects: any[])=>{
    this.assignedProjects=projects;
    this.renderProject();
})
this.attach();
this.renderContent();
    }
    private renderProject(){
        const listEl=document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
   
   for(const prjItem of this.assignedProjects){
    const listItem= document.createElement('li');
    listItem.textContent=prjItem.title;
    listEl?.appendChild(listItem);
   }
       
    }
    private renderContent(){
        const listId=`${this.type}-projects-list`;
        this.element.querySelector('ul')!.id=listId;
        this.element.querySelector('h2')!.textContent=
        this.type.toLocaleUpperCase()+'PROJECTS';
    }
    private  attach() {
        this.hostElement.insertAdjacentElement('beforeend',this.element);
    }
}


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
const activePrjList=new ProjectList('active');
const finishedPrjList=new ProjectList('finished');
