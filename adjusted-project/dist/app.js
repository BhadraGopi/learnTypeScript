"use strict";
//GETTER AND SETTER
class DepartmentModified {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class AcountingDepartment extends DepartmentModified {
    constructor(id, reports) {
        super(id, 'Accounding');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //getter is to retrive a value and allows to apply more complex logic
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("no report found");
        }
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in valid value');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
const accounding = new AcountingDepartment('d2', []);
accounding.mostRecentReport = "REPORT NEW";
console.log(accounding.mostRecentReport);
//accesed like a  property but will execute the edfined method.
//# sourceMappingURL=app.js.map