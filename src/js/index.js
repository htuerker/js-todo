// import '../styles/main.css';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';

// alert('8');

(function init() {
  const newProjectButton = document.createElement('button');
  newProjectButton.innerHTML = 'New Project';
  newProjectButton.className = "new-project-btn"
  newProjectButton.addEventListener('click', () => ProjectForm());

  const projectsDiv = document.querySelector('.projects');
  const container = document.querySelector(".container");
  container.insertBefore(newProjectButton, projectsDiv);

  const projectsList = ProjectList();
  projectsList.forEach((project) => projectsDiv.appendChild(project));
})();
