// class User {
//     constructor(name,surname,status){   // статус Teacher или Student
//         this.name = name;
//         this.surname = surname;
//         this.status = status;
//     }
//     getFullName(){
//         return 'Имя: '+this.name +'\n'+'Фамилия: '+this.surname;       
//     }
// }
// let dateNow = new Date();
// let currentdate = dateNow.getFullYear();

// class Student extends User {
//     constructor(name,surname,status,year){
//     super(name,surname,status);
//     this.year = year;
//     }
//     getCourse(){
//         let course = currentdate-this.year ;
//         return course;
//     }
// }

// class Teacher extends User {
//     constructor(name,surname,status,subjects,salary){
//         super(name,surname,status);
//         this.subjects = subjects;
//         this.salary = salary;
//     }
//     getCourse(){
//         return this.subjects;
//     } 
// }

// let helen = new Teacher('Helen','Ivanova','teacher',['русский язык','русская литература'],'500');

// console.log(helen instanceof Teacher);
// console.log(helen);
// console.log(helen.getCourse());
// console.log(helen.getFullName());

// let vasiliy = new Student('Vasiliy', 'Petrov', 'student', 2020);
// console.log(vasiliy);
// console.log(vasiliy.getCourse());

//************************** ЧЕРЕЗ ФУНКЦИЯЮ-КОНСТРУКТОР*************** */

let User = function(name, surname, status) {
    this.name = name;
    this.surname = surname;
    this.status = status;

    this.getFullName = function(){
                 return 'Имя: '+this.name +'\n'+'Фамилия: '+this.surname;       
             }
}

let dateNow = new Date();
let currentdate = dateNow.getFullYear();

let Student = function(name, surname, status,year){
    User.apply(this, arguments);
    this.year = year;

    this.getCourse = function(){
        let course = currentdate-this.year ;
        return course;
    }
}

let Teacher = function(name, surname, status, subjects, salary){
    User.apply(this, arguments);                    
    this.subjects = subjects;
    this.salary = salary;

    this.getCourse = function(){                       
        return this.subjects;
    }
}

let helen = new Teacher('Helen','Ivanova','teacher',['русский язык','русская литература'],'500');
console.log(helen instanceof Teacher);
console.log(helen);
console.log(helen.getCourse());
console.log(helen.getFullName());

let vasiliy = new Student('Vasiliy', 'Petrov', 'student', 2020);
console.log(vasiliy);
console.log(vasiliy.getCourse());