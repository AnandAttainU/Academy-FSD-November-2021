var btnEle = document.getElementById("btnId");
var inputEle = document.getElementById("inputId");
var listEle = document.getElementById("listId");

btnEle.addEventListener("click", addTask);

var taskCounter = 0;

function addTask(event){

    var newTask = inputEle.value;
    if (newTask.length == 0){
        alert("Enter valid task!!");
    }
    else {
        // var currentList = listEle.innerHTML;
        // var newStrTemplate = `${currentList} <li> ${newTask} <button>x</button></li>`;
        // // var newList = currentList + "<li>" + newTask + "</li>";

        // listEle.innerHTML = newStrTemplate;

        // creating the new li element
        taskCounter++;
        var newTaskEle = document.createElement('li');
        var checkBoxEle = document.createElement('input');
        checkBoxEle.type = 'checkbox';

        
        checkBoxEle.addEventListener('change', addCSS);
        
        // adding the newTask value inside the li element
        newTaskEle.innerText = newTask;
        newTaskEle.prepend(checkBoxEle);

        // creating the close button element
        var closeBtnElement = document.createElement('button');
        // adding the 'x' as the value of button element
        closeBtnElement.innerText = "x";
        // adding the button element as child of li element
        newTaskEle.appendChild(closeBtnElement);

        // adding the li element as child of ul element
        listEle.appendChild(newTaskEle);
        
        inputEle.value = "";

        closeBtnElement.addEventListener("click", removeItem);
    }
    
}

function removeItem(event){
    event.target.parentElement.remove();
}

function addCSS(event){
    var listEle = event.target.parentElement;
    switch(taskCounter){
        case 1:
            listEle.classList.toggle('strike-off');
            break;
        case 2:
            listEle.classList.toggle('task2');
            break;
        default:
            
    }
    
}



