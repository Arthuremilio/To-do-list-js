// Selection of Elements
const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let OldInputValue


//Functions
const saveTodo = (text) => {

    const todo = document.createElement ("div")
    todo.classList.add("todo")

    const todotitle = document.createElement("h3")
    todotitle.innerText = text
    todo.appendChild(todotitle)

    const doneBtn = document.createElement ("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement ("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement ("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todolist.appendChild(todo)

    todoInput.value = ""
}

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoform.classList.toggle("hide")
    todolist.classList.toggle("hide")
}
const updatetodo = (text) =>{

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todos) => {
        let todotitle = todos.querySelector("h3")

        if(todotitle.innerText === OldInputValue){
            todotitle.innerText = text

        }
    })
}

//Events
todoform.addEventListener("submit", (e) => { 
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue){
        saveTodo(inputValue)

    }
})

document.addEventListener("click", (e) =>{
    const targetEl = e.target
    const parentEl = targetEl.closest("div")
    let todotitle 

    if (parentEl && parentEl.querySelector("h3")){
        todotitle = parentEl.querySelector("h3").innerText
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done")
    }
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
    if (targetEl.classList.contains("edit-todo")){
        toggleForms()

        editInput.value = todotitle
        OldInputValue = todotitle
    }
})

 cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()

    toggleForms()
})
editForm.addEventListener("submit", (e) => {

    e.preventDefault()
    const editInputValue = editInput.value

    if(editInputValue) {
        updatetodo(editInputValue)

    }
    toggleForms()
})
