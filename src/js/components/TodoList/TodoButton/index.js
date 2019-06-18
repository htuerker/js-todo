import TodoForm from '../Todo/TodoForm'

export default function TodoButton() {
    const newTodoButton = document.createElement('button');
    newTodoButton.innerHTML = 'New ToDo';
    newTodoButton.addEventListener('click', () => TodoForm());

    return newTodoButton;
}
