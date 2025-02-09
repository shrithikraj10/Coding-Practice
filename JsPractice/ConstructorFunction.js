const { Console } = require("console");

function Bellboy (name, age, work){
    this.name = name;
    this.age = age;
    this.work = work;
}
// this is an example of a constructor function.

function EmployeDetails(Name, Age, Designation, Tasks){
    this.Name = Name;
    this.Age = Age;
    this.Designation = Designation;
    this.Tasks = Tasks;
    this.ToDo = function(){
        return "My Task is Coding";
    }
}

function add(a,b){
  return a+b;
};

function multiply(a,b){
    return a*b;
};

function calculator(a,b,operator){
    return operator(a,b);
}
// This is practice of calling functions inside of functions;


var Bellboy1 = new Bellboy("sahil", "24", "SDE");
var Bellboy2 = new Bellboy("Ronak", "24", "Racer");



var EmployeDetails1 = new EmployeDetails("Jack", 26, "SDE", ["dev","test"]);
console.log(EmployeDetails1.Name);
console.log(EmployeDetails1.ToDo());

console.log(calculator(10,2,multiply));