// import '../styles/main.css';
import ProjectList from './components/ProjectList';
import NewProjectButton from './components/NewProjectButton';

// alert('6');

(function init() {
  const container = document.querySelector(".container");
  container.appendChild(NewProjectButton());
  container.appendChild(ProjectList());
})();
