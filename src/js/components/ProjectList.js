import { retrieveProjects } from '../LocalStorage';
import Project from './Project';
import Todo from './Todo';
import { holdSlider, unholdSlider, dragSlider } from './Slider';

export default function ProjectList() {
    const projectsDiv = document.createElement('div');
    projectsDiv.className = 'projects';
    projectsDiv.addEventListener('mousedown', (e) => holdSlider(e));
    projectsDiv.addEventListener('mouseleave', () => unholdSlider());
    projectsDiv.addEventListener('mouseup', () => unholdSlider());
    projectsDiv.addEventListener('mousemove', (e) => dragSlider(e));

    const projects = retrieveProjects();
    projects.forEach((project) => {
        Object.setPrototypeOf(project, Project.prototype)
        projectsDiv.appendChild(project.render());
    });

    return projectsDiv;
}
