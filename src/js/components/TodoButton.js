import TodoForm from './TodoForm'

export default function TodoButton(id) {
    const newTodoButton = document.createElement('button');
    newTodoButton.innerHTML = 'New ToDo';
    newTodoButton.addEventListener('click', () => TodoForm(id));
    return newTodoButton;
}
