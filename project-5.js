// variables

const addTask = document.getElementById('add-task');
// targets the add task button
const taskContainer = document.getElementById('task-container'); 
// targets the container that contains the task   
const inputTask = document.getElementById('input-task');
// targets the input field that collects task

// function to add tast on click of the add task button
addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    // create a div
    task.classList.add('task');
    // Add a task of class to the div

    let li = document.createElement('li');
    // create a list item
    li.innerText = `${inputTask.value}`;
    task.appendChild(li)
    // append list item created by input task to the task div

    let checkbutton = document.createElement('button');
    // create checkbutton
    checkbutton.innerHTML = '<img src="./images/check-lg.svg" alt="">'; 
    // add svg icon to thr button
    checkbutton.classList.add('checkTask');
    // add a classlist of checkTask to the button
    task.appendChild(checkbutton);
    
    let deletebutton = document.createElement('button');
    // create checkbutton
    deletebutton.innerHTML = ' <img src="./images/trash3-fill.svg" alt="">';
      // add svg icon to thr button
    deletebutton.classList.add('deleteTask');
     // add a classlist of deleteTask to the button
    task.appendChild(deletebutton);

    if (inputTask.value === '') {
        alert('Please Enter Task');
        // alert the user if he/she  tries to add task without typing an input
    } else {
        taskContainer.appendChild(task);
        // appends the task to the task container
    }

    inputTask.value = "";
    // once a task has been added..the input fields become empty


    // function to check a completed task
    checkbutton.addEventListener('click', function (e) {
        e.preventDefault()
        checkbutton.parentElement.style.textDecoration = "line-through";
        //adds background color to checktask button
        checkbutton.style.background = 'rgb(10, 70, 117)';
        // colors delete task button once button is checked
        deletebutton.style.background = 'rgb(10, 70, 117)';
        // adds background color to  delete task button once button is checked
    });

    // function to delete a completed task
    deletebutton.addEventListener('click', function (e) {
        // let target = e.target;
        e.preventDefault()
        deletebutton.parentElement.remove();
        // deletes task
        // window.location.reload();
    })

});