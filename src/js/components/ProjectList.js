import { retrieveProjects } from '../LocalStorage';
import Project from './Project';
import Todo from './Todo';

export default function ProjectList() {
  const projects = retrieveProjects();
  console.log(projects);
  const projectsDiv = document.createElement('div');
  projectsDiv.className = 'projects';

  projects.forEach((project) => {
    Object.setPrototypeOf(project, Project.prototype)
    projectsDiv.appendChild(project.render());
  });

  return projectsDiv;
}
