/*window.onload=()=>{
 const parrafo =document.getElementById('text')
parrafo.innerText='texto actualizado'   
} permite que primero se cargue la pagina y luego ejecuta el 
bloque de codigo*/
//parrafo.innerHTML=bloque de codigo -->permite agregar html 
//a la pagina.
const todos = JSON.parse(localStorage.getItem('todos')) || [];
const render = () => {
    const todoList = document.getElementById("todo-list");
    const todosTemplate = todos.map(t => '<li>' + t + '</li>')
    /*for(let i=0;i<todos.length;i++){
        todoList.innerHTML+='<li>'+todos[i]+'</li>';
    }*/
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {

        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento);//los nodos
            //padres pueden eliminar a sus hijos
            todos.splice(i, 1);
            actualizaTodo(todos);
            render();
        })
    })
}
const form = document.getElementById("todo-form");
const actualizaTodo = (todos)=>{
    const todoStrings = JSON.stringify(todos);
        localStorage.setItem('todos', todoStrings);
}
window.onload = () => {
    render()
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodo(todos);
        render();




    }
}

