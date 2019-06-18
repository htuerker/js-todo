import '../styles/main.css';
import newProjectForm from './components/project';
import newTodoForm from './components/todo';

function init() {
    const newProjectButton = document.createElement('button');
    newProjectButton.innerHTML = 'New Project';
    newProjectButton.addEventListener('click', () => newProjectForm());

    const projects = document.getElementById('projects');
    projects.appendChild(newProjectButton);

    const newTodoButton = document.createElement('button');
    newTodoButton.innerHTML = 'New To-do';
    newTodoButton.addEventListener('click', () => newTodoForm());

    const todos = document.getElementById('to-dos');
    todos.appendChild(newTodoButton);
}

init();
