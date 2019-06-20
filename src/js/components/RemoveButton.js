import { deleteTodo } from "../LocalStorage";
import { deleteProject } from "../LocalStorage";
import Todo from './Todo';

export default function RemoveButton(element) {
  const removeButton = document.createElement("i");
  removeButton.className = "fas fa-trash-alt";
  removeButton.addEventListener('click', () => remove(element));

  return removeButton;
}

function remove(element) {
  if (confirm("Are you sure?")) {
    if (element instanceof Todo) {
      const projectDiv = document.getElementById("project-" + element.project);
      const todoDiv = document.getElementById("todo-" + element.id);
      projectDiv.removeChild(todoDiv);
      deleteTodo(element);
    } else {
      const projectsDiv = document.querySelector(".projects");
      const projectDiv = document.getElementById("project-" + element.id);
      projectsDiv.removeChild(projectDiv);
      deleteProject(element);
    }
  }
}
