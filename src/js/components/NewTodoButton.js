import TodoForm from './TodoForm'

export default function NewTodoButton(project) {
  const newTodoButton = document.createElement('button');
  newTodoButton.innerHTML = '+';
  newTodoButton.className = "new-todo-btn"
  newTodoButton.addEventListener('click', () => TodoForm(project));

  return newTodoButton;
}
