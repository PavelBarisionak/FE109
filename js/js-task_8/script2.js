// в теге с классом creator_name изменить слово Studio

let i;
let creatorName = document.querySelectorAll(".creator_name");

for (i=0; i<creatorName.length;i++) {
    if (creatorName[i].textContent == "Studio") 
    creatorName[i].innerHTML = "<i>Studio</i>"
}


//ДЗ!!! 
// Если в тексте есть это слово, то обернуть содержимое в тег <i></i>


// Вывести в начале body URL страницы

document.body.prepend(window.location.pathname)

let buttons = document.querySelectorAll("button");

// for (i=0; i<buttons.length;i++) {
//     console.log(i);
//     console.log(buttons[i]);
//     buttons[i].addEventListener("click", function() {
//         alert(i)
//     })
// }

buttons.forEach((elem, key) => {
    elem.addEventListener("click", function() {
        alert(key+1);
    })
})