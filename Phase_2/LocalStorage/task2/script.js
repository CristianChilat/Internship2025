const todoListElements = {
    input: document.getElementById('todo-input'),
    addButton: document.getElementById('add-todo-button'),
    todosList: document.getElementById('todos-list-container'),
    counter: document.getElementById('count-todos-container'),
}

const todosText = [];

function createTodoElement(text) {
    const todoElements = {
        container: document.createElement('div'),
        text: document.createElement('span'),
        modifyButton: document.createElement('button'),
        confirmButton: document.createElement('button'),
        deleteButton: document.createElement('button'),
        buttonsContainer: document.createElement('div')
    }

    todoElements.container.className = 'todo-container'
    todoElements.modifyButton.className = 'modify-button'
    todoElements.modifyButton.innerText = 'Modify'
    todoElements.deleteButton.className = 'delete-button'
    todoElements.deleteButton.innerText = 'Delete'
    todoElements.text.innerText = text;

    todoElements.modifyButton.addEventListener('click', () => {
        const modifyElements = {
            container: document.createElement('div'),
            input: document.createElement('input'),
            confirmButton: document.createElement('button'),
            cancelButton: document.createElement('button'),
        }

        modifyElements.input.value = todoElements.text.innerText;
        modifyElements.confirmButton.innerText = 'Confirm';
        modifyElements.cancelButton.innerText = 'Cancel';

        todoElements.text.style.display = 'none';

        modifyElements.confirmButton.addEventListener('click', () => {
            const oldText = todoElements.text.innerText;
            const newText = modifyElements.input.value;
            const index = todosText.indexOf(oldText);
            
            if (index !== -1) {
                todosText[index] = newText;
            }
            
            todoElements.text.innerText = newText;
            modifyElements.container.remove();
            todoElements.text.style.display = 'block';
            
            localStorage.setItem('todos', JSON.stringify(todosText));
        })

        modifyElements.cancelButton.addEventListener('click', () => {
            modifyElements.container.remove();
            todoElements.text.style.display = 'block';
        })

        modifyElements.container.appendChild(modifyElements.input);
        modifyElements.container.appendChild(modifyElements.confirmButton);
        modifyElements.container.appendChild(modifyElements.cancelButton);

        todoElements.container.prepend(modifyElements.container);
    })

    todoElements.deleteButton.addEventListener('click', () => {
        todoElements.container.remove();
        todoListElements.counter.innerText = `${todoListElements.todosList.children.length} todos left`;
        todosText.splice(todosText.indexOf(todoElements.text.innerText), 1);
        localStorage.setItem('todos', JSON.stringify(todosText));
    })

    todoElements.buttonsContainer.appendChild(todoElements.modifyButton);
    todoElements.buttonsContainer.appendChild(todoElements.deleteButton);

    todoElements.container.appendChild(todoElements.text);
    todoElements.container.appendChild(todoElements.buttonsContainer);

    return todoElements.container;
}

function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        const todos = JSON.parse(savedTodos);
        todosText.push(...todos);
        
        todos.forEach(todo => {
            todoListElements.todosList.appendChild(createTodoElement(todo));
        });
        
        todoListElements.counter.innerText = `${todos.length} todos left`;
    }
}

todoListElements.addButton.addEventListener('click', () => {
    const newTodoText = todoListElements.input.value;
    if (newTodoText) {
        todosText.push(newTodoText);
        todoListElements.todosList.appendChild(createTodoElement(newTodoText));
        localStorage.setItem('todos', JSON.stringify(todosText));
        todoListElements.counter.innerText = `${todoListElements.todosList.children.length} todos left`;
        todoListElements.input.value = '';
    }
});

loadTodos();