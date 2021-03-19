//#1

let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

//#2

post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);

//#3 Functions

function TodoPost(ev){  
    ev.preventDefault();

    //Necesito obtener el valor del TextArea

    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    var currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" /> ${todo} <br>`;
}

function TodoClear(){
    var todos = document.getElementsByName("todo");

    for(var i=0; i<todos.length; i++){
        todos[i].checked = false;
    }
}

function TodoMark(ev){
    var todos = document.getElementsByName("todo");

    for(var i=0; i<todos.length; i++){
        todos[i].checked = true;
    }
}

function TodoDel(){
    var list = document.getElementById("todoList");
    list.innerHTML = "";
}