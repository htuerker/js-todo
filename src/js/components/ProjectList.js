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

  const nextButton = document.createElement('button');
  nextButton.id = 'next-slide';
  nextButton.addEventListener('click', () => plusSlider(1));
  nextButton.innerHTML = 'next';

  const prevButton = document.createElement('button');
  prevButton.id = 'prev-slide';
  prevButton.addEventListener('click', () => plusSlider(-1));
  prevButton.innerHTML = 'left';

  projectsDiv.prepend(nextButton);
  projectsDiv.prepend(prevButton);

  return projectsDiv;
}

function plusSlider(n) {
  let x = document.querySelector(".projects");
  x.scrollLeft += 340 * n;
}
