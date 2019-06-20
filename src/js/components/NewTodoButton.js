import Swal from 'sweetalert2';
import Todo from './Todo.js';
import { updateProject } from '../LocalStorage';

export default function NewTodoButton(project) {
  const newTodoButton = document.createElement('i');
  newTodoButton.className = "far fa-plus-square"
  newTodoButton.addEventListener('click', () => TodoForm(project));

  return newTodoButton;
}

function TodoForm(project) {
  Swal.fire({
    html:
    `<input id="title" class="swal2-input" placeholder="Title">
     <input id="description" class="swal2-input" placeholder="Description">
     <select id="priority" class="swal2-input"">
       <option value="0" selected>Low Priority</option>
       <option value="1">Medium Priority</option>
       <option value="2">High Priority</option>
     </select>
    `,
    focusConfirm: false,
    confirmButtonText: 'Add To-do',
    preConfirm: () => {
      appendTodo(project);
    }
  });
}

function appendTodo(project) {
  const projectDiv = document.getElementById('project-' + project.id);
  if(projectDiv) {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const todoObject = new Todo(title, description, priority, project.id);
    const newTodoDiv = todoObject.render();
    projectDiv.appendChild(newTodoDiv);

    project.todos.push(todoObject);
    updateProject(project);
  }
}
