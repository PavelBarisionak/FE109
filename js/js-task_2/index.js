/*
//1
console.log('Задание 1')
let name, age, city, phone, email, company;

Firstname = prompt('введите ваше имя');
age = prompt('введите ваш возраст');
city = prompt('введите ваш город проживания');
phone = prompt('введите ваш номер телефона');
email = prompt('введите адрес вашей электронной почты');
company = prompt('введите название компании, в которой работаете');

console.log('Меня зовут '+ Firstname +'. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' 
+ company +'. Мои контактные данные: ' + phone + ' , ' + email + '.');

//2
console.log('Задание 2')
console.log(Firstname + ' родился в ' + (2021 - age) + ' году.');  

//3
console.log('Задание 3');
let num;
str = prompt('Введите 6 цифр');

if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
     console.log('да')}
else {console.log('нет')};      

//4
console.log('Задание 4');
let a;
a = prompt('Введите значение a');
if (a > 0) {console.log('Верно')}
else {console.log('Неверно')}; 

//5
console.log('Задание 5');
let a=10, b=2;

console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a / b );
if ( (a + b) > 1) { console.log((a + b)**2)};  

//6
console.log('Задание 6');
if (((a > 2) && (a < 11)) || ((b >= 6) && (b < 14))) {console.log('Неверно')}; */

/*
function basicOp(operation, value1, value2)
{   operation = prompt('введите операцию +, -, *, /');
    value1 = prompt('введите первое значение');
    value2 = prompt('введите второе значение');  
    if (operation == "+"){console.log(+value1 + +value2)}
    if (operation == "-"){console.log(+value1 - +value2)}
    if (operation == "*"){console.log(+value1 * +value2)}
    if (operation == "/"){console.log(+value1 / +value2)}
}
basicOp();


//7
function basicOp(operation, value1, value2)
{
    if (operation == "+") return(+value1 + +value2)
    if (operation == "-") return(+value1 - +value2)
    if (operation == "*") return(+value1 * +value2)
    if (operation == "/") return(+value1 / +value2)
}

//8
function bonusTime(salary, bonus) {
    if (bonus == true) return (salary = '£'+ salary * 10)
    if (bonus == false) return (salary = '£'+ salary)  
    } */

 //9
    function getGrade (s1, s2, s3) {
        let middle = (s1 + s2 + s3)/3, score;
        if ( middle >= 90 && middle <= 100) return (score = 'A') 
        if (middle >= 80 && middle < 90) return (score = 'B') 
        if (middle >= 70 && middle < 80) return (score = 'C') 
        if (middle >= 60 && middle < 70) return (score = 'D') 
        if (middle >= 0 && middle < 60) return (score = 'F') 
        
      }
  
