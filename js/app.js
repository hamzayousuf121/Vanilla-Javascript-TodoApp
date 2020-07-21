var addTodo = document.getElementById('todoform');
var todoItems = document.getElementById('todoList');
var todo = document.getElementById('todo');
var count = 0;
addTodo.addEventListener('submit', (e) => {

    e.preventDefault();
    var li = document.createElement('li')
    var button = document.createElement('button')
    var editButton = document.createElement('button')
   
    if (todo.value !== '') {
       
        li.setAttribute('class', 'list-group-item')
        li.setAttribute('onclick', 'strike(this)')
        li.setAttribute('id', `todo${count}`)
        ++count;

        button.setAttribute('class', 'btn btn-danger right')
        button.setAttribute('onclick', 'deleteTodo(this)')
        button.appendChild(document.createTextNode('Delete'))

        editButton.setAttribute('class', 'btn btn-secondary right')
        editButton.setAttribute('onclick', 'editTodo(this)')
        editButton.setAttribute('data-toggle', 'modal')
        editButton.setAttribute('data-target', '#centralModalSuccess')
        editButton.appendChild(document.createTextNode('Edit'))

        li.appendChild(document.createTextNode(todo.value))
        li.appendChild(button)
        li.appendChild(editButton)
        todoItems.appendChild(li)
        todo.value = '';
        
    }
})


strike = (e) => {
   e.style.textDecoration = 'line-through';
}

deleteAllTodo = () => {
    todoItems.innerHTML = '';
}
deleteTodo = e => {
    e.parentNode.remove();
}

   editTodo = e  => {
    var updateTodoValue = document.getElementById('updateTodoValue')

    if(e == 'update'){
        console.log(updateTodoValue.value)
    } else{
        var nodeValue = e.parentNode.firstChild.nodeValue;
        updateTodoValue.value = nodeValue;
    }
    
    // console.log(nodeValue);
    // updateTodoValue.value = nodeValue
}
