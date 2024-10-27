const todoList = ['make dinner', 'wash dishes'];

for (let i = 0; i < todoList.length; i++) {}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value
    console.log(name);
    
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

}