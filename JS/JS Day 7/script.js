var btnEle = document.getElementById("btnId");
var inputEle = document.getElementById("inputId");
var listEle = document.getElementById("listId");

btnEle.addEventListener("click", addTask);



function addTask(){
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
        var newTaskEle = document.createElement('li');
        // adding the newTask value inside the li element
        newTaskEle.innerText = newTask;

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



