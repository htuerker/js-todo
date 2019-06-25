import { updateTodo } from '../LocalStorage';

export default function DescriptionTextarea(todo) {
  const todoDescription = document.createElement('textarea');
  todoDescription.innerHTML = todo.description;
  let timeout = null;
  todoDescription.onkeyup = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      todo.description = todoDescription.value; // eslint-disable-line no-param-reassign
      updateTodo(todo);
    }, 1000);
  };
  return todoDescription;
}
