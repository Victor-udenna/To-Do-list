// variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');    
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li)

    let checkbutton = document.createElement('button');
    checkbutton.innerHTML='Check'; 
    checkbutton.classList.add('checkTask');
    li.appendChild(checkbutton);
    
    let deletebutton = document.createElement('button');
    deletebutton.innerHTML= 'Delete';
    deletebutton.classList.add('deleteTask');
    li.appendChild(deletebutton);

    if (inputTask.value === '') {
        alert('Please Enter Task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkbutton.addEventListener('click', function (e) {
        e.preventDefault()
        checkbutton.parentElement.style.textDecoration = "line-through";
    });

    deletebutton.addEventListener('click', function (e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
        // window.location.reload();
    })

});