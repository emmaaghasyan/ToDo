// SELECTORS
const input = document.querySelector('.container form input[type=text]');
const addTodoBtn = document.querySelector('.container form input[type=submit]');
const filter = document.querySelector('.container form .filter');
const todos = document.querySelector('.container .todos');


// EVENTS
addTodoBtn.addEventListener('click', addTodoFunc );
todos.addEventListener('click', checkTodoFunc);
filter.addEventListener('change', filterFunc);

// FUNCTIONS

function addTodoFunc(e){
    e.preventDefault();

    if( !input.value.trim() ) return;
   
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const span1 = document.createElement('span');
    span1.classList.add('todo_text');
    span1.innerText = input.value;

    const span2 = document.createElement('span');
    span2.innerHTML = '<i class="fas fa-check"></i>';
    span2.innerHTML += '<i class="fas fa-trash"></i>';


    todo.appendChild(span1);
    todo.appendChild(span2);

    todos.appendChild(todo);

    input.value = '';
}


function checkTodoFunc(e){
    
    if(e.target.classList[1] === 'fa-trash'){
        const todo = e.target.parentElement.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        });
    }

    if(e.target.classList[1] === 'fa-check'){
        const todo = e.target.parentElement.parentElement;
        todo.classList.toggle('done');
    }

}


function filterFunc(e){

    const todos = document.querySelectorAll('.todos .todo');

    if(e.target.value === 'all'){
        todos.forEach(todo=>{
            todo.style.display = 'flex';
        });
    }
    else if(e.target.value === 'completed'){
        todos.forEach(todo=>{
            if(todo.classList.contains('done')) todo.style.display = 'flex';
            else todo.style.display = 'none';
        });
    }
    else if(e.target.value === 'uncompleted'){
        todos.forEach(todo=>{
            if(!todo.classList.contains('done')) todo.style.display = 'flex';
            else todo.style.display = 'none';
        });
    }

}
