// import '../styles/main.css';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';

alert('6');

(function init() {
  const newProjectButton = document.createElement('button');
  newProjectButton.innerHTML = 'New Project';
  newProjectButton.className = "new-project-btn"
  newProjectButton.addEventListener('click', () => ProjectForm());

  const container = document.querySelector(".container");
  container.appendChild(newProjectButton);

  const projectsList = ProjectList();
  container.appendChild(projectsList);
})();
