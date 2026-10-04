document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskDesc = document.getElementById('task-desc');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <strong>${taskInput.value}</strong>
            <p style="margin: 3px 0 0 0; font-size: 12px; color: #555;">${taskDesc.value}</p>
        </div>
        <button onclick="this.parentElement.remove()" style="background:#dc3545; padding:5px 8px;">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = '';
    taskDesc.value = '';
});