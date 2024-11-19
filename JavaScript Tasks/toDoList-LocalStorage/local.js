const loginBtn1El = document.getElementById("loginBtn1");
const registerBtn1El = document.getElementById("registerBtn1");
const loginBtn2El = document.getElementById("loginBtn2");
const registerBtn2El = document.getElementById("registerBtn2");
const addBtnEl = document.getElementById("add");


// let registeredUsername = '';
// let registeredPassword = '';

function showRegister() {
    document.getElementById('loginPopup').classList.remove('active');
    document.getElementById('registerPopup').classList.add('active');
}

function showLogin() {
    document.getElementById('registerPopup').classList.remove('active');
    document.getElementById('loginPopup').classList.add('active');
}

let currentUser = '';

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let valid = true;
    document.getElementById('registerUsernameError').textContent = '';
    document.getElementById('registerPasswordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    const usernameRegex = /^[A-Za-z]+$/; 
    if (username.length < 4 || !usernameRegex.test(username)) {
        document.getElementById('registerUsernameError').textContent = 'Username contains at least 4 characters ';
        valid = false;
    }
    
    const passwordRegex = /^[A-Za-z$%#@](?=.*\d).{6,}$/; 
    if (!passwordRegex.test(password)) {
        document.getElementById('registerPasswordError').textContent = 'Password contains at least one letter, one number and length of 6 characters';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        valid = false;
    }

    if (valid) {
        const userData = {
            password: password,
            tasks: []
        };
    
        localStorage.setItem(username, JSON.stringify(userData));
        showLogin(); 
    }
}
    

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    let valid = true;
    document.getElementById('loginUsernameError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    const usernameRegex = /^[A-Za-z]+$/; 
    if (username.length < 4 || !usernameRegex.test(username)) {
        document.getElementById('loginUsernameError').textContent = 'Username must be at least 4 characters long';
        valid = false;
    }

    const passwordRegex = /^[A-Za-z](?=.*\d)/; 
    if (password.length < 6 || !passwordRegex.test(password)) {
        document.getElementById('loginPasswordError').textContent = 'Password contains at least one letter, one number and length of 6 characters';
        valid = false;
    }

    const storedUserData = JSON.parse(localStorage.getItem(username));
    if (!storedUserData || storedUserData.password !== password) {
        document.getElementById('loginUsernameError').textContent = 'Invalid username';
        document.getElementById('loginPasswordError').textContent = 'Invalid password';
        valid = false;
    }

    if (valid) {
        currentUser = username;
        document.getElementById('loginPopup').classList.remove('active');
        document.querySelector('.todoapp').style.display = 'block';
        loadTodos(); 
    }
}


loginBtn1El.addEventListener("click", login);
registerBtn1El.addEventListener("click", showRegister);
registerBtn2El.addEventListener("click", register);
loginBtn2El.addEventListener("click", showLogin);



function addTodo() {
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput) {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.innerHTML = `<span>${todoInput}</span>
                        <input type="checkbox" class="check" id="complete">
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>`;
        todoList.appendChild(li);
        saveTodo(todoInput);

        const editButton = li.querySelector('#edit');
        const deleteButton = li.querySelector('#delete');
        const checkbox = li.querySelector('.check');
            
        editButton.addEventListener('click', function() {
            editTask(this);
        });
            
        deleteButton.addEventListener('click', function() {
            deleteTask(this);
        });
            
        checkbox.addEventListener('click', function() {
            toggleComplete(this);
        });

        document.getElementById('todoInput').value = '';
    }
}
    
addBtnEl.addEventListener("click", addTodo);

function saveTodo(task) {
    const storedUserData = JSON.parse(localStorage.getItem(currentUser));
    storedUserData.tasks.push({ task: task, completed: false });
    localStorage.setItem(currentUser, JSON.stringify(storedUserData));
}

function loadTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';  
    const storedUserData = JSON.parse(localStorage.getItem(currentUser));
    storedUserData.tasks.forEach((taskObj, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskObj.task}</span>
                    <input type="checkbox" class="check" id="complete">
                    <button id="edit">Edit</button>
                    <button id="delete">Delete</button>`;
    
    // if (taskObj.completed) {
    //     li.classList.add('completed');
    // }
    todoList.appendChild(li);
    
    const editButton = li.querySelector('#edit');
    const deleteButton = li.querySelector('#delete');
    const checkbox = li.querySelector('.check');
    
    editButton.addEventListener('click', function() {
        editTask(this);
    });

    deleteButton.addEventListener('click', function() {
        deleteTask(this, index);
    });

    checkbox.addEventListener('click', function() {
        toggleComplete(this);
    });
    });
}
    

function deleteTask(button) {
    const li = button.parentElement; 
    const todoList = li.parentNode; 
    let taskIndex = -1; 

    for (let i = 0; i < todoList.children.length; i++) {     
        if (todoList.children[i] === li) {
            taskIndex = i; 
            break; 
        }
    }    
    if (taskIndex != -1) {
        console.log(taskIndex);
        
        li.remove(); 
        deleteTaskFromStorage(taskIndex); 
    }
}

function deleteTaskFromStorage(taskIndex) {
    const storedUserData = JSON.parse(localStorage.getItem(currentUser));
    if (storedUserData && storedUserData.tasks) {
        storedUserData.tasks.splice(taskIndex, 1); 
        localStorage.setItem(currentUser, JSON.stringify(storedUserData)); 
    }
}
           

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const todoList = li.parentNode; 
    let taskIndex = 0;   
    for (let i = 0; i < todoList.children.length; i++) {
        // console.log(todoList.children.length);
        if (todoList.children[i] === li) {
            taskIndex = i;
            break;
        }
    }
    if (button.textContent === 'Edit') {
        span.contentEditable = true;
        span.focus();
        button.textContent = "Save";
    } else {
        span.contentEditable = false;
        button.textContent = "Edit";

        const newTask = span.textContent;
        if (newTask) {
            li.querySelector('span').textContent = newTask; 
            updateTaskText(newTask, taskIndex);
        }
    }
}

function updateTaskText(newTask, taskIndex) {
    const storedUserData = JSON.parse(localStorage.getItem(currentUser));
    if (storedUserData && storedUserData.tasks) {
        storedUserData.tasks[taskIndex].task = newTask;
        localStorage.setItem(currentUser, JSON.stringify(storedUserData));
    }
}

function toggleComplete(button){
    const li = button.parentElement;
    const checkBtn = li.querySelector('input').checked;
    // console.log(checkBtn);
    const taskText = li.querySelector('span').textContent;
    // console.log(taskText);
    updateTaskCompletion(taskText, checkBtn);
} 

function updateTaskCompletion(taskText, isCompleted) {
    const storedUserData = JSON.parse(localStorage.getItem(currentUser));
    const task = storedUserData.tasks.find(task => task.task === taskText);
    task.completed = isCompleted;
    localStorage.setItem(currentUser, JSON.stringify(storedUserData));
}






