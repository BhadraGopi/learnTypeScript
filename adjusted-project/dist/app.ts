//Intersection Types
type Admin={
    name: string;
    priviledgess:string[];
};
type Employee={
    name: string;
    startDate: Date;
}

type ElevatedEmployee=Admin&Employee;
const e1: ElevatedEmployee={
    name:'Kim',
    priviledgess:['create-server'],
    startDate: new Date()
}
type Combinable = string|number;
type Numeric=number|boolean;
type Universal= Combinable& Numeric;