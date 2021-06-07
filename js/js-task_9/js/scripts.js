
input = document.querySelector('input');
ul = document.querySelector('ul');
input.addEventListener('keydown', function(event){
    if (event.keyCode == 13){        
        let li = document.createElement('li');
        li.innerHTML = ' '+input.value;
        li.classList.add('dostyle');
        ul.append(li);
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        li.prepend(checkbox);
        input.value = '';  
        checkbox.addEventListener('change',function(){
            li.classList.toggle('crossed');
        });
        
        li.addEventListener('dblclick', function(){
            this.textContent = prompt('введите новое значение', li.textContent);
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type','checkbox');
            li.prepend(checkbox);
            checkbox.addEventListener('change',function(){
                li.classList.toggle('crossed');
            });            
        })
    }
})
clear = document.querySelector('.clear');
    clear.addEventListener('click', function(){
        ul.innerHTML = '';
    })