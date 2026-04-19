let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
  {
    text: "Learn HTML",
    uniqueId:1
  },
  {
    text: "Learn CSS",
    uniqueId:2
  },
  {
    text: "Learn JavaScript",
    uniqueId:3
  }
];

let todoCount = todoList.length

function onTodoStatusChange(checkboxId,labelId){
    let checkboxElement = document.getElementById(checkboxId)
    let labelElement = document.getElementById(labelId)
    if(checkboxElement.checked){
        labelElement.classList.add("checked");
    }
    else{
        labelElement.classList.remove("checked");
    }
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement)
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox"+todo.uniqueId
    let labelId = "label"+todo.uniqueId
    let todoId = "todo"+todo.uniqueId
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick = function(){
      onTodoStatusChange(checkboxId,labelId);
  }
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id=labelId
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("p");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.textContent="delete"
  deleteIcon.onclick = function(){
      onDeleteTodo(todoId)
  }
  deleteIconContainer.appendChild(deleteIcon);
}



for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo(){
    let userInput = document.getElementById("todoUserInput");
    let userInputValue = userInput.value 
    todoCount=todoCount+1
    let newTodo = {
        text:userInputValue,
        uniqueId:todoCount
    }
    if(userInputValue === ""){
        alert("Enter Valid Text")
        return;
    }
    
    createAndAppendTodo(newTodo);
}

let addTodoBtn = document.getElementById("addTodo")
addTodoBtn.onclick = function(){
    onAddTodo();
}

