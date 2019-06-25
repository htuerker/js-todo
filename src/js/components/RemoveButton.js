import Swal from 'sweetalert2';
import { deleteTodo } from "../LocalStorage";
import { deleteProject } from "../LocalStorage";
import Todo from './Todo';

function remove(element) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.value) {
      if (element instanceof Todo) {
        const projectDiv = document.querySelector(`#project-${element.project} .content`);
        const todoDiv = document.getElementById(`todo-${element.id}`);
        projectDiv.removeChild(todoDiv);
        deleteTodo(element);
      } else {
        const projectsDiv = document.querySelector('.projects');
        const projectDiv = document.getElementById(`project-${element.id}`);
        projectsDiv.removeChild(projectDiv);
        deleteProject(element);
      }
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
      );
    }
  });
}

export default function RemoveButton(element) {
  const removeButton = document.createElement('i');
  removeButton.className = 'fas fa-trash-alt';
  removeButton.addEventListener('click', () => remove(element));

  return removeButton;
}
