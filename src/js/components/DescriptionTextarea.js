import { updateTodo } from '../LocalStorage';

export default function DescriptionTextarea(todo) {
  const todoDescription = document.createElement("textarea");
  todoDescription.innerHTML = todo.description;
  let timeout = null;
  todoDescription.onkeyup = function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      todo.description = todoDescription.value;
      updateTodo(todo);
    }, 1000);
  }
  return todoDescription;
}
