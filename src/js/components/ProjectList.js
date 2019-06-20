import { retrieveProjects } from '../LocalStorage';
import Project from './Project';
import Todo from './Todo';

export default function ProjectList() {
  const projects = retrieveProjects();
  const projectsDiv = document.createElement('div');
  projectsDiv.className = 'projects';

  projects.forEach((project) => {
    Object.setPrototypeOf(project, Project.prototype)
    projectsDiv.appendChild(project.render());
  });

  const nextButton = document.createElement('i');
  nextButton.className = "fas fa-arrow-right"
  nextButton.id = 'next-btn';
  nextButton.addEventListener('click', () => plusSlider(1));

  const prevButton = document.createElement('i');
  prevButton.className = "fas fa-arrow-left"
  prevButton.id = 'prev-btn';
  prevButton.addEventListener('click', () => plusSlider(-1));

  projectsDiv.prepend(nextButton);
  projectsDiv.prepend(prevButton);

  return projectsDiv;
}

function plusSlider(n) {
  let x = document.querySelector(".projects");
  x.scrollLeft += 342 * n;
}
