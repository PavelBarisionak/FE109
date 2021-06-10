/* // ОБЬЕКТЫ. ФУНКЦИИ - КОНСТРУКТОРЫ, ЗАДАЧИ 
/*let kontakti = {
    firstname : prompt('Введите Имя', 'Иван'),
    lastname : prompt('Введите фамилию', 'Иванов'),
    age : prompt('Введите возраст', 18),
    phonenumber : prompt('Введите номер телефона', "+375(29)123-45-67"),
    email : prompt("Введите адрес электронной почты", 'mail@gmail.com'),
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
 
// ******КОНСТРУКТОР "КОНТАКТЫ", ДЛЯ СБОРА КОНТАКТНЫХ ДАННЫХ************

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
    
       
};    
  // ************КОНСТРУКТОР "ФИТНЕС", ИСПОЛЬЗУЕТ КОНСТРУКТОР ФИТНЕС, ДОБАВЛЯЕТ НОВЫЕ СВОЙСТВА И ИЗМЕНЯЕТ ФУНКЦИЮ ПРОВЕРКИ ВОЗРАСТА*****
    let Fitnes = function(firstname,lastname,age,phonenumber,email,height,weight){
        Kontakti.apply(this,arguments);
        this.height = height;
        this.weight = weight;
        this.checkage = function() {
            if (this.age < 0) return ('Возраст не может быть отрицательным числом');
            else if (this.age < 5) return ('Возраст менее 5 лет, лучше повременить с фитнесом');
            else return('возраст соответствует');    
        };        
        
    }    
  // ****************** ШАБЛОНЫ ВВОДА ДАННЫХ***************
    let kont1 = new Fitnes("Иван","Иванов",16,"+375291234567","pochta@mail.ru",170,60);
    console.log(kont1.checklastname());
    console.log(kont1.teltest());
    console.log(kont1.checkage()) ;
    console.log(kont1.checkfirstname());
    console.log(kont1);
        
    let kont2 = new Fitnes("Перт","Петров",32,"+375297777777","petr@mail.ru");
    let kont3 = new Kontakti("Сергей","Сергеевич",44,"+375-44-654-76-25","serge@mail.ru");

   // console.log(kont1.checkage()) ;
   //console.log(kont1.checkfirstname());
    
   


/*
//******************** ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ***************
let DOM = function() {
    this.create = function(tagName) {
        return document.createElement(tagName);   //'tagName'
    }
    this.attr = function(element,name,value){        
        return element.setAttribute(name,value);// (element,'name','value')
    }
    this.html = function(element,value){        
        return element.innerHTML=value; // (element,'value')
    }
    this.search = function(element,selector){        
        if (selector == 'id') return document.getElementById(element);
        else if  (selector == 'class') return document.getElementsByClassName(element);
        else if  (selector == 'tag') return document.getElementsByTagName(element);
        else if  (selector == 'name') return document.getElementsByName(element);
         // (element, selektor = tag, class, name, id)
    }
    this.addClass = function(element,className){ //element, 'className'
        return element.classList.add(className)                     
    }    
    this.removeClass = function(element,className){ //element, 'className'
        return element.classList.remove(className)                     
    }  
    this.toggleClass = function(element,className){ //element, 'className'
        return element.classList.toggle(className)                     
    }
    this.hasClass = function(element,className){ //element, 'className'
        return element.classList.contains(className);                     
    }
    this.apppend = function(element,newElement,beforeElement) {
        if (beforeElement==null) return element.append(newElement);
        else return beforeElement.before(newElement);
    }
    this.on = function(element,eventName,funcName){ // element, 'eventName'
        element.addEventListener(eventName, funcName)
    }
    
}
let red = function(){               // ФУНКЦИЯ, КОТОРАЯ БУДЕТ ВЫЗЫВАТЬСЯ КЛИКОМ
    this.classList.toggle('red');
};  

   let elem = new DOM();
   let body = document.body;
   //let h1 = document.querySelector('h1');
   //console.log(h1);
   let h1 = elem.create("h1"); // создание элемента
   console.log(h1);
   elem.attr(h1,'class','zagolovok'); // добавление аттрибута
   console.log(h1);
   elem.html(h1,'<p>заголовок</p>'); // добавление текста
   console.log(h1);
   elem.apppend(body,h1); // добавление элемента 
   console.log(document.querySelectorAll('body')); 
   console.log(document.getElementsByTagName('body'));  
   console.log(elem.search('body','tag'));// поиск 
   elem.addClass(h1,'zagolovok2'); // добавление класса
   console.log(h1);
   elem.removeClass(h1,'zagolovok2'); // удаление класса
   console.log(h1);
   elem.toggleClass(h1,'zagolovok2'); // переключение класса
   console.log(h1);    
   console.log(elem.hasClass(h1,'zagolovo')); // уточнение наличия класса
   let p1 = elem.create('p'); 
   console.log(p1);
   let cr = elem.html(p1,'какой-то текст');
   let cr1 = elem.apppend(body,p1);
   elem.on(h1,'click',red);
  */
    

  