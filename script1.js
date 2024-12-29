const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    // Create a new <li> element
    const listItem = document.createElement('li');

    // Create the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Append the task text and remove button to the <li>
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    // Add the <li> to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
    taskInput.focus();
});