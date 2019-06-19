import '../styles/main.css';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import TodoForm from './components/TodoForm';

(function init() {
  const newProjectButton = document.createElement('button');
  newProjectButton.innerHTML = 'New Project';
  newProjectButton.addEventListener('click', () => ProjectForm());

  const projects = document.getElementById('projects');
  projects.appendChild(newProjectButton);

  const projectsList = ProjectList();
  projectsList.forEach((project) => projects.appendChild(project));
})();
