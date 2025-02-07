function Bellboy (name, age, work){
    this.name = name;
    this.age = age;
    this.work = work;
}
// this is an example of a constructor function.


var Bellboy1 = new Bellboy("sahil", "24", "SDE");
var Bellboy2 = new Bellboy("Ronak", "24", "Racer");


console.log(Bellboy1, Bellboy2);