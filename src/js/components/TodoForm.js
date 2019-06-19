import Swal from 'sweetalert2';
import Todo from './Todo.js';

export default function TodoForm(id) {
  Swal.fire({
    html:
    '<input id="title" class="swal2-input" placeholder="Title">'
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
  if(projectDiv) {
    const todoObject = new Todo(document.getElementById('title').value);
    const newTodoDiv = todoObject.render();
    projectDiv.appendChild(newTodoDiv);
  }
}
