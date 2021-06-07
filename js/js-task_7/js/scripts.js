// ИЗ ПРОШЛОГО ДЗ Ввод номера телефона, вариант со скобками, тире, пробелами и без пробелов. 
/*
9. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.

 function teltest(tel){
        let regexp = /(|\+)\d{1,3}(\s|-|\(|)\d{2,3}(\s|-|\)|)\d{3}(|\s|-)\d{2}(|\s|-)\d{2}/gi;
        console.log(regexp.test(tel));
    }
    
    teltest('+375447868668');
	
13.  // ЦИКЛ ПРОВЕРКИ НА НАЛИЧИЕ СПЕЦСИМВОЛОВ КОРЯВЕНЬКИЙ, ВОЗМОЖНО КАК-ТО МОЖНО ПОЛУЧШЕ НАПИСАТЬ.
(задание сложности hard)
    Напишите ф-цию, которая должна проверить правильность ввода адреса
    эл. почты, неиспользуя регулярные выражения. 
    
    Почта верна при условии:
    
    a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
    одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
    быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
    «.@» или «@@», «_@», «@-», «--» и т.п.
    
    b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
    имя может содержать только буквы, цифры, но не быть первыми и
    единственными в имени, и точку.
    
    c. после последней точки и после @, домен верхнего уровня (ru, by, com и
    т.п.) не может быть длиной менее 2 и более 11 символов. 
    

    let mail = "fdsdf@gmail.com";
    let count = 0;
    let numafterpoint;
    let symbol = ["-", ".", "@", "_"];
    let kir = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я','А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
    let symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
    function checkMail(mail) {
        let mailBefore = mail.slice(0, mail.indexOf("@"));
        let mailAfter = mail.slice(mail.indexOf("@")+1)
        if (mailBefore.length <=2) return ("длинна имени менее 2 символов");
        else {
            if (!isNaN(mailBefore[0])) return ("первый элемент имени либо все элементы имени это цифра");
        else {for (let i=0; i<mail.length; i++){
            for (let j=0; j<kir.length; j++){
                if (mail[i] == kir[j]) return ("содержаться русские буквы");
            }}
        {for (let i=0; i<mailBefore.length; i++){
            for (let j=0; j<symb.length; j++){
                if (mailBefore[i] == symb[j]) return ("в имени содержаться спецсимволы");
            }}
        {for (let i=0; i<mailAfter.length; i++){
            for (let j=0; j<symb.length; j++){
                if (mailAfter[i] == symb[j]) return ("содержаться символы после @");
            }}
         for (let i=0; i<mail.length; i++){
            for (let j=0; j<symbol.length; j++){
                if (mail[i] == symbol[j] && mail[i+1]== symbol[j]) return ("содержаться повторяющиеся символы");
        else for (let j=0; j<symbol.length; j++){
            if (mail[0] == symbol[j])  return ("первый символ является спецсимволом");
        else for (let j=0; j<symbol.length; j++){
            if (mail[mail.length-1] == symbol[j]) return("последний символ является спецсимволом");
        else for (let i=mail.length-1; i>=0; i--){            
            if (mail[i] !== '.') {
                count++;}
            else {numafterpoint = count;}
        }            
            if (numafterpoint < 2 || numafterpoint > 11) {
                return ("менее 2 или более 11 символов после точки")
            }
            else  return("запись является адресом электронной почты");
        }
        }}}}}}}
    }

    console.log(checkMail(mail));

    mail	
	
	
	/*  Цикл для проверки на русские буквы
    let mail = "asпрdf@gmail.com";
    let kir = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я','А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
console.log(mail[1]);
console.log(kir[1]);
    function checkMail(mail) {
    for (let i=0; i<mail.length; i++){
for (let j=0; j<kir.length; j++){
                if (mail[i] == kir[j]) return ("содержаться русские буквы")
}}
                return ('ok')

}       

                console.log(checkMail(mail)); 
				
				
				
//    ДОМАШКА №7
// Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом больше 18, вывод информации о конкретном
контакте, вывод всех контактов.

// ВАРИАНТ БЕЗ Ф-ЦИИ КОНСТРУКТОРА /*
let kontakti = {
    firstname : prompt('Введите Имя'),
    lastname : prompt('Введите фамилию'),
    age : prompt('Введите возраст'),
    phonenumber : prompt('Введите номер телефона'),
    email : prompt("Введите адрес электронной почты"),
    checkage : function() {
            if (this.age < 0) return ('Возраст не может быть отрицательным числом');
            else if (this.age < 18) return ('Возраст менее 18 лет');
            else return('возраст соответствует');
        },
    checkfirstname : function() {
            for (let i=0; i<this.firstname.length; i++) {
            if (!isNaN(this.firstname[i])) return ('имеется цифра в имени');
            }return('проверка имени прошла успешно');
                
        },
    checklastname : function() {
            for (let i=0; i<this.lastname.length; i++) {
            if (!isNaN(this.lastname[i])) return ('имеется цифра в фамилии');
            }return('проверка фамилии прошла успешно');
                        
        },
    teltest : function() {
            let regexp = /(|\+)\d{1,3}(\s|-|\(|)\d{2,3}(\s|-|\)|)\d{3}(|\s|-)\d{2}(|\s|-)\d{2}/gi;
            if (regexp.test(this.phonenumber)) return('проверка номера телефона прошла успешно');
            else return('введенный номер не соответствует формату');
    },
    };
       
    
    console.log(kontakti.checkage()) ;
    console.log(kontakti.checkfirstname());
    console.log(kontakti.checklastname());
    console.log(kontakti.teltest());
    
*/	
	
	
//********************************************************************	
// ВАРИАНТ С Ф-ЦИЕЙ КОНСТРУКТОРОМ (НЕ РАБОТАЕТ)
//************************************************************

let Kontakti = function(firstname,lastname, age, phonenumber, email) {    
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.phonenumber = phonenumber;
        this.email = email;      
    this.checkage = function() {
            if (this.age < 0) return ('Возраст не может быть отрицательным числом');
            else if (this.age < 18) return ('Возраст менее 18 лет');
            else return('возраст соответствует');
        };
    this.checkfirstname = function() {
            for (let i=0; i<this.firstname.length; i++) {
            if (!isNaN(this.firstname[i])) return ('имеется цифра в имени');
            }return('проверка имени прошла успешно');
                
        };
    this.checklastname = function() {
            for (let i=0; i<this.lastname.length; i++) {
            if (!isNaN(this.lastname[i])) return ('имеется цифра в фамилии');
            }return('проверка фамилии прошла успешно');
                        
        };
    this.teltest = function() {
            let regexp = /(|\+)\d{1,3}(\s|-|\(|)\d{2,3}(\s|-|\)|)\d{3}(|\s|-)\d{2}(|\s|-)\d{2}/gi;
            if (regexp.test(this.phonenumber)) return('проверка номера телефона прошла успешно');
            else return('введенный номер не соответствует формату');
    };
    }
       
    let kont1 = new Kontakti("Иван","Иванов",25,"+375291234567","pochta@mail.ru");
    let kont2 = new Kontakti("Перт","Петров",32,"+375297777777","petr@mail.ru");
    let kont3 = new Kontakti("Сергей","Сергеевич",44,"+375-44-654-76-25","serge@mail.ru");

    console.log(kont1.checkage()) ;
    console.log(kont1.checkfirstname());
    console.log(kont1.checklastname());
    console.log(kont1.teltest());