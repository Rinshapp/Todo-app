console.log('log');
const todo_input = document.getElementById("todo-input");
const todo_add_btn = document.getElementById("todo-add-btn");
const todo_list_data_container = document.getElementById("todo-list-data-container");
const form =document.getElementById("form");

console.log('form');



form.addEventListener("submit",addTodo)

function addTodo(e) {
    e.preventDefault();
    let todoText = todo_input.value;
    console.log(todoText);

    let _div_ = document.createElement("div");
    let _p_ = document.createElement("p");
    _p_.setAttribute("id","p")

    let span = document.createElement("span");
    let iconTag = document.createElement("i");
    iconTag.classList.add("fa-solid","fa-trash")
    span.innerHTML = todoText;
    _p_.appendChild(iconTag);
    _p_.appendChild(span)


    let editiconTag = document.createElement("i");
    editiconTag.classList.add("fa-solid","fa-user-pen")
    span.innerHTML =todoText;
    _p_.appendChild(editiconTag);
    _p_.appendChild(span)

    
    // _p_.innerHTML = todoText;
    console.log(todo_list_data_container,'-------');
    todo_list_data_container.appendChild(_div_.appendChild(_p_))
    

    todo_input.value = ''
    let del = document.getElementById("p")
    del.addEventListener("click",(event)=>{
        console.log(event.target);
        console.log(event.target.classList[1]);
        if(event.target.classList[1]=='fa-trash'){
            event.target.parentElement.remove()
            console.log();
        }
    })
   

    let ee = document.getElementById("p");
    ee.addEventListener("click",(event)=>{
        console.log(event.target);
        console.log(event.target.classList[1]);
        if(event.target.classList[1]=='fa-user-pen'){
            let updateText = prompt("Edit Text");
            let newSpan = _p_.querySelector('span')
            newSpan.innerHTML = updateText;
        }
    })

    let btn = document.getElementById("btn");
    btn.addEventListener("click",(event)=>{
        while(_p_.hasChildNodes()) {
            _p_.firstChild.remove()      
        }
    })
   

    
}





