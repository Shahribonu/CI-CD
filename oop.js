// let Obj = function(){
//     this.a = 1;
//     this.b = 2;
// }

// let a = new Obj();
// console.log(a);


// let Person = function(name){
//     this.name = name;
//     this.greet=function(){
//         console.log('Hello '+ this.name);
//     }
// }

// let peter = new Person("Peter")
// peter.greet()



// class Person{
//     name
//     constructor(username){
//         this.name = username;
//     }
//     greet(){
//         console.log('my name is ' + this.name);
//     }
// }

// const peter = new Person('Peter')
// peter.greet()




// class Person{
//     #name
//     #surname
//     constructor(fullName){
//         this.fullName=fullName;
//     }
//     get getname(){
//         return this.#name
//     }
//     get surname(){
//     return this.#surname
//     }
//     set setFullName(fullName){
//         const split= fullName.split(' ')
//         this.#name = split[0]
//         this.#surname = split[1]
//     }
//     get fullName(){
//         return this.#name + ' ' + this.#surname
//     }
   
// }

// const peter = new Person('Peter jonh')
// // peter.fullName('Shahribonu peter');
// peter.setFullName = 'Shahribonu peter'
// console.log(peter.fullName);



class Person{
    name
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name
    }
    setName(newName){
        this.name = newName

    }
}

class Student extends Person{
    // super(name)
    surname
    section
    constructor(name,surname,section){
        super(name)
        this.surname = surname;
        this.section = section;
    }
    getSurname(){
        return this.surname;
    }
    setSurname(newSurname){
        this.surname = newSurname;
    }
    getSection(){
        return this.section
    }
    setSection(newSection){
        this.section = newSection;
    }
}

const studen1 = new Student('John', 'peter', 'section1')
console.log(studen1.getName());
console.log(studen1.getSurname(), studen1.getSection());