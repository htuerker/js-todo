import Swal from 'sweetalert2';
import Todo from './Todo.js';

export default function TodoForm(id) {
  Swal.fire({
    html:
    `<input id="title" class="swal2-input" placeholder="Title">
    <input id="description" class="swal2-input" placeholder="Description">`
    ,
    focusConfirm: false,
    confirmButtonText: 'Add To-do',
    preConfirm: () => {
      appendTodo(id);
    }
  });
}

function appendTodo(projectId) {
  const projectDiv = document.getElementById('project-' + projectId);
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  if(projectDiv) {
    const todoObject = new Todo(title, description);
    const newTodoDiv = todoObject.render();
    projectDiv.appendChild(newTodoDiv);
  }
}
