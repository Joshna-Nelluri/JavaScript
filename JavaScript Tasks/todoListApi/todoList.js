const todoList = document.getElementById('todoList');
const todoForm = document.getElementById('todoForm');
const newInput = document.getElementById('newTodo');

// let maxId = 0;
let todos = [];

function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())        
        .then(data =>  {
            console.log(data)
            todos = data.slice(0, 10);
            todos.forEach(todo => {
                addItem(todo);
                
               // if (todo.id > maxId) {
              //     maxId = todo.id
               // };
            });
        })
        .catch(error => console.log(error));
}


function addItem(todo) {
    
    const li = document.createElement('li');
    li.setAttribute('data-id', todo.id);
    
    li.innerHTML = `
    <strong class="idValue">${todo.id}</strong>
    <span>
    <strong class="titleName">${todo.title}</strong> 
    </span>
    <input type="checkbox" class="check">
    <button class="edit">Edit</button>
    <button class="delete"><img src="https://cdn2.iconfinder.com/data/icons/squircle-ui/32/Trash-64.png"></img></button>
  `;
    todoList.appendChild(li);

  
   const checkBtn = li.querySelector('.check');
   checkBtn.addEventListener('click', () => checkItem(todo.id, li));

    const deleteBtn = li.querySelector('.delete');
    deleteBtn.addEventListener('click', () => deleteItem(todo.id, li));

    const editBtn = li.querySelector('.edit');
    editBtn.addEventListener('click', () => editItem(todo.id, li));

}


function checkItem(id, element){
    const checkBtn = element.querySelector('.check').checked;
    console.log(checkBtn);
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: checkBtn }),
        headers: { 'Content-Type': 'application/json' }
    })
    
 
}



function deleteItem(id, element) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
    .then(() => {
        element.remove();
        // console.log(`${id} deleted.`);
    })
    .catch(error => console.log(error));
}



function editItem(id, element) {
    const span = element.querySelector('span');
    const editBtn = element.querySelector('.edit');

    if (editBtn.textContent === 'Edit') {
        span.contentEditable = true;
        editBtn.innerHTML = 'Save';
    } 
    else {
        span.contentEditable = false;
        const updatedTitle = span.textContent;

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ title: updatedTitle }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            // console.log(response);
    }
}


todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTitle = newInput.value;

    // console.log(newTitle);
    if (newTitle) {
        // const newId = maxId < 50 ? maxId + 1 : 1;
        const newId = todos.length + 1;

        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: newTitle,
                completed: false,
                userId: 1,
                id: newId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())

            .then(newTodo => {
                newTodo.id = newId;
                // maxId = newId;
                todos.push(newTodo);
                addItem(newTodo);
                newInput.value = '';
            })
            .catch(error => console.log(error));
    } else {
        console.log('Input is empty!');
    }
});

fetchTodos();

