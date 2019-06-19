import '../styles/main.css';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import TodoForm from './components/TodoForm';
import TodoButton from './components/TodoButton';
import Project from './components/Project.js';
import Todo from './components/Todo.js';

alert('5');

(function init() {
  const newProjectButton = document.createElement('button');
  newProjectButton.innerHTML = 'New Project';
  newProjectButton.addEventListener('click', () => ProjectForm());

  const projectsDiv = document.getElementById('projects');
  projectsDiv.appendChild(newProjectButton);

  const projectsList = ProjectList();
  projectsList.forEach((project) => projectsDiv.appendChild(project));
})();
