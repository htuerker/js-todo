import '../styles/main.css';
import newProjectForm from './components/project';
import newTodoForm from './components/todo';
import ProjectList from './components/ProjectList';
import Project from './components/ProjectList/Project';
import ProjectForm from './components/ProjectList/Project/ProjectForm';

(function init() {
  const newProjectButton = document.createElement('button');
  newProjectButton.innerHTML = 'New Project';
  newProjectButton.addEventListener('click', () => ProjectForm());

  const projects = document.getElementById('projects');
  projects.appendChild(newProjectButton);

  const newTodoButton = document.createElement('button');
  console.log(ProjectList());
  newTodoButton.innerHTML = 'New ToDo';
  newTodoButton.addEventListener('click', () => ProjectForm());

  const todos = document.getElementById('to-dos');
  todos.appendChild(newTodoButton);
  const projectsList = ProjectList();
  projectsList.forEach((project) => projects.appendChild(project));
})();
