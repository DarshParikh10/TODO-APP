const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add new task
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task) {
        addTask(task);
        todoInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task!');
    }
});

// Function to add a task
function addTask(task) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const taskText = document.createElement('span');
    taskText.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
}
