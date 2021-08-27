const input = document.getElementById('input-add');
const ul = document.querySelector('ul');

// listeners 
input.addEventListener('keypress', newTodo);
//event to delete list item button 
ul.addEventListener('click', deleteTodo);

// event listener to check box
ul.addEventListener('change', itemChecked);



// function new todo 

function newTodo(e){
    if(e.key === 'Enter' && input.value !== ''){
        const li = document.createElement('li');
        li.innerHTML = `<div class="list-item"><input type="checkbox" class="checkbox"> 
        <span>${input.value}</span>
        </div>
        <span class="delete-icon" id="delete-todo"><i class="far fa-trash-alt"></i></span>`;
        ul.appendChild(li);
        clearInput()
    }
}
// function clear input 

function clearInput(){
    input.value = '';
}


// function delete todo list 

function deleteTodo(e){
    if(e.target.className === 'far fa-trash-alt'){
        const listNode = e.target.parentNode.parentNode;
        listNode.parentNode.removeChild(listNode);
    }
   
}

// TODO:function checkitem  line through and put the item at the end 

function itemChecked(e){
    if(e.target.checked){
        e.target.parentNode.classList.add('item-checked');
        const el = e.target.parentNode.parentNode;
        ul.removeChild(el);
        ul.appendChild(el)
    }else{
        e.target.parentNode.classList.remove('item-checked');
        const el = e.target.parentNode.parentNode;
        ul.removeChild(el);
        ul.prepend(el);
    }
}