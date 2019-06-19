import Swal from 'sweetalert2';
import Todo from './Todo';
import { createTodo } from '../mock';

export default function TodoForm(id) {
  console.log(id);
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
  const project = document.getElementById('project-' + projectId);
  if(project) {
    const todo = createTodo(document.getElementById('title').value);
    const newTodo = todo.render();
    project.insertBefore(newTodo, project.lastChild);
  }
}
