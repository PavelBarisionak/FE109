/*
1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g,'!'));

2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.

let date = new Date('2025-12-31'), date2;
console.log(date);

let opt = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',  
};
console.log(date.toLocaleString('ru', opt));
date2=date.toLocaleString('ru', opt);
console.log(date2.replace(/\./g, '/'));

3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).

let loveStr='Я учу javascript!'
console.log(loveStr.substr(2, 3));
console.log(loveStr.substring(2, 5));
console.log(loveStr.slice(2, 5));

4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let sum = 0,  arr=[4, 2, 5, 19, 13, 0, 10];
for (let i=0; i<arr.length; i++) {    
    console.log(sum += arr[i]**3);
}
console.log(Math.sqrt(sum));

5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.

let a,b,c;
a = prompt('введите число "а"');
b = prompt('введите число "b"');
console.log(Math.abs(c=a-b));

6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).

let dateNow = new Date();
console.log(dateNow);
let hour = dateNow.getHours(), min = dateNow.getMinutes(), sec = dateNow.getSeconds(), dat = dateNow.getDate(), mon = dateNow.getMonth()
function get0() {    
       if (hour.toString().length == 1) {           
        hour = "0" + hour;}
       if (min.toString().length == 1) {
        min = "0" + min; }
       if (sec.toString().length == 1) {
        sec = "0" + sec; }
       if (dat.toString().length == 1) {
        dat = "0" + dat;}
       if (mon.toString().length == 1) {
        mon = "0" + mon;}       
}
get0();

console.log(hour + ":" + min + ":" + sec + " " + dat + "." + mon +"." + dateNow.getFullYear() + ".");

7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.

let str = 'aa aba abba abbba abca abea';
console.log(str);

console.log(str.match(/abb*a/gi));


8. Дана почта пользователя test@mail.ru (можно использовать любую)
Написать ф-цию, которая принимает почту и возвращает из нее логин -
слово до знака @

let str='', i;
function login(mail) {
    console.log(mail.search(/@/)); 
    let n = mail.search(/@/);    
    for(i=0; i<n; i++){
        str += mail[i];
    }
    return(str);
}
console.log('логин  - '+ login('test@mail.ru'));

9. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.

 function teltest(tel){
        let regexp = /\+\d{1,3}(\s|-|\(|)\d{2,3}(\s|-|\)|)\d{7}/gi;
        console.log(regexp.test(tel));
    }
    
    teltest('+375447862441');

10. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
    - весь адрес не должен содержать русские буквы и спецсимволы, кроме
    одной «собачки», знака подчеркивания, дефиса и точки;
    - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
    имя может содержать только буквы, цифры, но не быть первыми и
    единственными в имени;
    - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
    не может быть длиной менее 2 и более 11 символов.
   
    Функция должна возвращать true или false. Используйте регулярные
    выражения.
    
    
    function emailtest(email){
        let regexp = /^[^0-9]([\w]|\.|-){2,999}@[a-z]+\.[a-z]{2,11}/gi;
        console.log(regexp.test(email));
    }
    
    emailtest('pochta@gmail.com');

    11. Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел, который поможет составить слово из этой Grid таблицы, например: 

    ```
     Grid таблица: 
    
     [
         ['m', 'y', 'e'], 
         ['x', 'a', 'm'], 
         ['p', 'l', 'e']
     ]
     
     карта чисел: 
     
     [1, 3, 5, 8]
     
    ```
    Создайте единый массив из Grid таблицы (можно при помощи метода .flat()) и по нему составьте слово пользуясь картой чисел, чтобы в результате получилось, например:
    
        ```
         'meal'
         
        ```
    Результат функции должен вернуть строку
    
    [kata](https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript) 
   

    function gridIndex(grid, indices) {
        grid = grid.flat();          
             let word = '' ;       
             for (let i=0; i<indices.length ; i++) {
                 word += grid[indices[i]-1];
             }
              return word;
      }

12. Здесь вам в аргументах даны 2 массива: 
    
    Нужно преобразовать каждый массив удалив в нем повторяющиеся числа.
    
    После чего склеить эти два массива, отсортировать и вернуть как результат

    [kata](https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript)

    */
    /* НЕДОДЕЛАЛ!!!!!!
    function testit(a,b){
        console.log(a);
        for (i = 0; i<a.length; i++){
                        if (a[i] == a[j]) 
            {a.splice(j,1);}            
        }        
        }
        console.log(a);
        return a;

      }
      console.log(testit([2,2,2,4,5,2,5,6,2,6,6,5]));
      */