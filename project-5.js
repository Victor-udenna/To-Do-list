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
    checkbutton.innerHTML = '<img src="./images/check-lg.svg" alt="">'; 
    checkbutton.classList.add('checkTask');
    task.appendChild(checkbutton);
    
    let deletebutton = document.createElement('button');
    deletebutton.innerHTML= ' <img src="./images/trash3-fill.svg" alt="">';
    deletebutton.classList.add('deleteTask');
    task.appendChild(deletebutton);

    if (inputTask.value === '') {
        alert('Please Enter Task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkbutton.addEventListener('click', function (e) {
        e.preventDefault()
        checkbutton.parentElement.style.textDecoration = "line-through";
        checkbutton.style.background = 'rgb(10, 70, 117)';
        deletebutton.style.background = 'rgb(10, 70, 117)';
    });

    deletebutton.addEventListener('click', function (e) {
        // let target = e.target;
        e.preventDefault()
        deletebutton.parentElement.remove();
        // window.location.reload();
    })

});