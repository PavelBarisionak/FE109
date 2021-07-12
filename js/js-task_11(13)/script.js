"use strict";

let indexUser = null;                  
class User {                                                                 //Единичный контакт

    constructor(id, firstName, email, address, phone) {
        this.dataUser = {id, firstName, email, address, phone};
    }

    edit(newInfo) {
        this.dataUser = {
            id: this.dataUser.id,
            firstName: newInfo.firstName || this.dataUser.firstName,
            email: newInfo.email || this.dataUser.email,
            address: newInfo.address || this.dataUser.address,
            phone: newInfo.phone || this.dataUser.phone}
    }

    get info() {
        return this.dataUser;
    }
}

class Contacts {                                                                  // массив из контаков класса User
    constructor() {
        this.data = [];    }

    addUser(firstName, email, address, phone) {                               // добавление нового контакта в форме contactBook.addUser('Alex', 'alex@gmail.com', 'address Alex', '+375331');
        let id;
        if(this.data.length == 0) {
            id = 1;
        } else {
            id = this.data[this.data.length-1].dataUser.id + 1;
        }
        let newUser = new User(id, firstName, email, address, phone);
        this.data.push(newUser);
    }

    edit(id, newInfo) {
        let index = this.data.findIndex(elem => elem.dataUser.id == id);
        this.data[index].edit(newInfo);
    }

    getInfo(id) {
        let index = this.data.findIndex(elem => elem.dataUser.id == id);
        return this.data[index];
    }

    get() {
        return this.data;
    }

    remove(id) {
        this.data = this.data.filter(elem => elem.dataUser.id !== id);
    }

    removeAll() {
        this.data = [];
    }
}

//let oneUser = new Contacts();

class ContactsApp extends Contacts{       
    constructor(data) {
        super(data); 
        this.getData();

        if (!getCookie('parameter')) {                    // проверка на существование куки(не прошел ли срок ее действия). Если прошел, то удаляется localStorage   вставляется в конструктор
            localStorage.removeItem('contactsData')
        }
        // возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
        }
    }
    
    async getData(){        
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) return;

        let Apidata = await response.json();
        console.log(Apidata, response.status);
        console.log(Apidata[1].username);
        console.log(this.data);        
        if (this.data.length==0){                        
            Apidata.forEach((user,index) =>{
                console.log(Apidata[index].username);
                addNewContact(Apidata[index].username, Apidata[index].email, Apidata[index].address, Apidata[index].phone);                
            })
        };

    };

    show() {
        //document.querySelector(".contacts").classList.add("active");
        let contactTable = document.querySelector(".contactList");
        contactTable.innerHTML = "";       

        this.data.forEach((elem, index) => {
            let btnEdit = document.createElement('button'); // создаем кнопку
            btnEdit.classList.add('btn-edit');
            btnEdit.classList.add('btn');
            btnEdit.innerHTML = '<p></p>';

            let line = document.createElement("tr");
            line.innerHTML = `
            <td class="elemId">${elem.dataUser.id}</td>
            <td class="elemFirstName">${elem.dataUser.firstName}</td>
            <td class="elemEmail">${elem.dataUser.email}</td>
            <td class="elemAddress">${elem.dataUser.address}</td>
            <td class="elemPhone">${elem.dataUser.phone}</td>
            <td class="pensil">               
            </td>
            <td class="trash">
                <button data-index="${index}" onclick="deleteContact(${elem.dataUser.id})" class="btn btn-del" type="reset"><p></p></button>
            </td>`;
            

            line.querySelector('.pensil').appendChild(btnEdit);

            btnEdit.addEventListener('click', editContact);


            contactTable.appendChild(line);
                        
        });       
    }

    
    }

//РЕДАКТИРОВАНИЕ
                              
let editContact = function(event){
    // console.log('edit', event);
    
    let elemId = event.target.closest('tr').querySelector('.elemId').innerText;  //обращение к ближайш tr, потом к elemId, потом забираем тейкст инф и сохраняем в elemId

    //console.log(contactBook.data);

    let user = contactBook.data.filter(function(user){       // перебор всех юзеров, выбираем конкнетный и возвращаем dataUser
        if (+user.dataUser.id == +elemId) return user;                 //
    });
    // console.log(user[0].dataUser);

    let name = document.querySelector('#firstNameLabel'); // находим поля
    let email = document.querySelector('#emailLabel'); 
    let address = document.querySelector('#addressLabel'); 
    let phone = document.querySelector('#phoneLabel');
    
    name.value = user[0].dataUser.firstName;         // присваиваем им данные
    email.value = user[0].dataUser.email;
    address.value = user[0].dataUser.address;
    phone.value = user[0].dataUser.phone;

    let submit = document.querySelector('.formForUser .btn-submit'); 
    submit.dataset.action = 'edit';                        // добавляем экшэн что бы изменить редактирование вместо добавления
    submit.dataset.id = user[0].dataUser.id;
};



let contactBook = new ContactsApp();     // ф-ция для обновления информации из localstorage

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!         
let updateLocal = function() {
    let localUsersData = localStorage.getItem('contactsData');
    if (localUsersData && localUsersData.length >0) 
    contactBook.data = JSON.parse(localUsersData);
    contactBook.show();    
}();   





   
let checkForm = function() {     // отвечает за добавление,  потом еще и за сохраниение измененного контакта
    if (this.dataset.action != 'edit'){    
        let firstName = document.getElementById("firstNameLabel").value,        // получаем значения из input-ов
            email = document.getElementById("emailLabel").value,
            address = document.getElementById("addressLabel").value,
            phone = document.getElementById("phoneLabel").value;
        if(!firstName || !email || !address || !phone) {
            alert("Заполните все поля!");
            return false;
        } else {
            addNewContact(firstName, email, address, phone);
            document.querySelector(".formForUser").reset("");
        }
    } else {
        let firstName = document.getElementById("firstNameLabel").value,
            email = document.getElementById("emailLabel").value,
            address = document.getElementById("addressLabel").value,
            phone = document.getElementById("phoneLabel").value;

        let id = this.dataset.id;

        let newInfo = {
            firstName: firstName,
            email: email,
            address: address,
            phone: phone
        };

         contactBook.edit(id, newInfo);   // сохраниние редактированных данных
         let submit = document.querySelector('.formForUser .btn-submit');
         submit.removeAttribute('data-action');// удаление data из кнопки 
         submit.removeAttribute('data-id');                  

         localStorage.setItem('contactsData', JSON.stringify(contactBook.data));  // добавляем в localstorage после каждого обновления
         document.cookie='parameter=storageExpiration; max-age=3600';

         contactBook.show();

         document.querySelector(".formForUser").reset("");
         
    }
}





let addNewContact = function(firstName, email, address, phone) {
        contactBook.addUser(firstName, email, address, phone);
        
        localStorage.setItem('contactsData', JSON.stringify(contactBook.data));  // добавляем в localstorage после каждого добавления
        document.cookie='parameter=storageExpiration; max-age=3600';
        
        contactBook.show();       
    }
let showContacts = function() {
        contactBook.show();
    }
let deleteContact = function(index) {
        if(confirm("Вы уверены, что хотите удалить пользователя?")) {
            contactBook.remove(index);            

            localStorage.setItem('contactsData', JSON.stringify(contactBook.data));  // добавляем в localstorage после каждого удаления
            document.cookie='parameter=storageExpiration; max-age=3600';

            contactBook.show();

        }
    }

let deleteContactAll = function(index) {
    if(confirm("Вы уверены, что хотите очистить список ВСЕХ пользователей?")) {
        contactBook.removeAll();        

        localStorage.setItem('contactsData', JSON.stringify(contactBook.data));  // добавляем в localstorage после каждого удаления всех
        document.cookie='parameter=storageExpiration; max-age=3600';

        contactBook.show();

    }
}


// добавляю нового пользователя
const addBtnSubmit = document.querySelector(".btn-submit");
addBtnSubmit.addEventListener('click', checkForm);


const btndelAll = document.querySelector(".btn-delAll");
btndelAll.addEventListener('click', deleteContactAll);



