// console.log('hello world');

// let a = 10;
// function outer(){
//     let b =20
//     function inner(){
//         c = 30
//         console.log(a,b,c);
//     }
//     inner()
// }
// outer()


// function counter(){
//     counter = 0;
//     function inner(){
//       counter++;
//       console.log(counter);
//     }
//    return inner
// }

// const fn = counter()
// fn()
// fn()

// function sum(a,b,c){

//     return a+b+c
// }

// console.log(sum(1,2,3));


// const person={
//     name:"shahri",
//     sayName:function(){
//         console.log(`My name is ${this.name}`);
//     }
// }

// person.sayName()


// function Person(fName,lName){
//     this.fName = fName;
//     this.lName = lName;
// }
// Person.prototype.getFullName = function(){
//     return this.fName + ' ' + this.lName
// }

// function SuperHer(fName,lName){
//     Person.call(this,fName,lName);
//     this.isSuperHero = true;
// }
// SuperHer.prototype.fightCrime = function(){
//     console.log('fight crime');
// }
// SuperHer.prototype = Object.create(Person.prototype);

// const batman = new SuperHer('shahri', 'me');
// const person1 = new Person('shahri','otaqulova')
// const person2 = new Person('begi','otaqulova')


// console.log(batman.getFullName());


// const str = 'shahribonu'

// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
//     console.log(str.charAt(i));
// }




// class Person{
//     private firstname;
//     private lastname;
//     private age;

//     constructor(firstname, lastname, age){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     get firstname(){
//         return this._firstname;
//     }

//     set firstname(value){
//         this._firstname = value;
//     }
//     get lastname(){
//         return this._lastname;
//     }

//     set lastname(value){
//         this._lastname = value;
//     }
//     get age() {
//       return this._age;
//     }

//     set age(value){
//         if(value<0){
//             this._age = 0
//         }
//         else{
//             this._age = value
//         }
//     }
// }

// class Employee extends Person {
//   private inn;
//   private number;
//   private snils;

// constructor(firstname, lastname,age, inn, number, snils) {
//    super(firstname,lastname,age){
//     this.inn=inn;
//     this.number=number;
//     this.snils=snils;
//    }
// }

// }

// const employee1 = new Employee('Shahri','Begi', 21)
// console.log(employee1, 'employee1');


function addTask() {
    const taskText = document.getElementById("newTask").value;
    if (taskText) {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        document.getElementById("newTask").value = "";
    }
}
