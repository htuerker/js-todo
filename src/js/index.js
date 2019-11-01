import '../styles/main.css';
import '../styles/checkbox.css';

import ProjectList from './components/ProjectList';
import NewProjectButton from './components/NewProjectButton';
import { PrevButton, NextButton } from './components/Slider';

((function init() {
  const container = document.querySelector('.container');
  container.appendChild(NewProjectButton());
  container.appendChild(PrevButton());
  container.appendChild(NextButton());
  container.appendChild(ProjectList());
})());
