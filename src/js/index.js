// import '../styles/main.css';
import ProjectList from './components/ProjectList';
import NewProjectButton from './components/NewProjectButton';
import { PrevButton, NextButton } from './components/Slider';

// alert('6');

(function init() {
  const container = document.querySelector(".container");
  container.appendChild(NewProjectButton());
  container.appendChild(PrevButton());
  container.appendChild(NextButton());
  container.appendChild(ProjectList());
})();
