//auto bind decorator
function autobind(_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return adjDescriptor;
        }
    };
}
//Project input class
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        //accessing the html element
        this.templateElement = document.getElementById('project-input');
        //accesing the host element where the content will be desplayed or where the form will be rendered
        this.hostElement = document.getElementById('app');
        //to render the content from the host, the true reps that we need to access the nested elems as well
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        //getting access to dif inputs in the form before attaching the form
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.gatherUserInput = function () {
        var enteredTitle = this.titleInputElement.value;
        var enteredDescription = this.descriptionInputElement.value;
        var enteredPeople = this.peopleInputElement.value;
        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 ||
            enteredPeople.trim().length === 0) {
            alert('invalid input, please try again');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    };
    //@autobind
    ProjectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        //console.log(this.titleInputElement.value);
        var userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            var title = userInput[0], desc = userInput[1], people = userInput[2];
            console.log(title, desc, people);
        }
        else {
            console.log('User input is empty');
        }
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    };
    ProjectInput.prototype.attach = function () {
        //it'll open right at the begining of the opening tag
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    return ProjectInput;
}());
var prjInput = new ProjectInput();
